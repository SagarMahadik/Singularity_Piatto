import React, { useReducer, useContext, useEffect, useRef } from 'react';
import addProductReducer from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductReducer.js';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';
import {
  SET_LOADING,
  NEXT_STEP,
  PREVIOUS_STEP,
  UPDATE_FIELD,
  SET_PRODUCTFILEDETAILS,
  SET_FILEURL,
  POST_ADDON,
  COMPLETE_FORM,
  SET_CATEGORYDATA,
  SET_SLECTEDCATEGORY,
  SET_PRODUCTSTATUSDATA,
  UPDATE_PRODUCTSTATUSDATA,
  SET_ADDONITEMDATA,
  UPDATE_ADDONITEMDATA,
  SET_ADDONFLAVOURDATA,
  UPDATE_ADDONFLAVOURDATA,
  SET_PRODUCTVARIANTDATA,
  UPDATE_PRODUCTVARIANTDATA,
  UPDATE_NUTRITIONDATA
} from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/types.js';

import axios from 'axios';

const AddProductState = props => {
  const initialState = {
    Category: '',
    SubCategory: '',
    productName: '',
    productDescription: '',
    crossSellPitch: '',
    productPrice: '',
    productImageURL: '',
    cuisine: '',
    calories: '',
    protiens: '',
    carbohydrates: '',
    fats: '',
    loading: false,
    categoryData: [],
    productStatusData: [],
    addOnitemData: [],
    addOnFlavourData: [],
    productVariantData: [],
    additionalInformation: [],
    selectedAddOnItemItems: [],
    nutritionData: [
      {
        nutrient: 'protiens',
        value: ''
      },
      {
        nutrient: 'carbohydrates',
        value: ''
      },
      {
        nutrient: 'fats',
        value: ''
      },
      {
        nutrient: 'calories',
        value: ''
      }
    ],
    enteredNutritionData: [],
    isSubCategory: false,
    selectedCategory: '',
    productFileName: '',
    filesrc: '',
    step: 1
  };

  const fileInputRef = useRef();

  const setLoading = () => dispatch({ type: SET_LOADING });

  const getCategoryData = async () => {
    setLoading();

    const res = await axios.get('/api/v1/category');
    console.log(res.data.data.data);

    dispatch({
      type: SET_CATEGORYDATA,
      payload: res.data.data.data
    });
  };

  const getProductStatusData = async () => {
    {
      {
        setLoading();
        const res = await axios.get(
          '/api/v1/additionalProductInfomation/status'
        );
        console.log(res.data.data.data);

        dispatch({
          type: SET_PRODUCTSTATUSDATA,
          payload: res.data.data.data
        });
      }
    }
  };

  const getAddOnItemData = async () => {
    {
      setLoading();
      const res = await axios.get('/api/v1/addOn/addOn');
      console.log(res.data.data.data);

      dispatch({
        type: SET_ADDONITEMDATA,
        payload: res.data.data.data
      });
    }
  };

  const getAddOnFlavourData = async () => {
    {
      setLoading();
      const res = await axios.get('/api/v1/addOn/flavour');
      console.log(res.data.data.data);

      dispatch({
        type: SET_ADDONFLAVOURDATA,
        payload: res.data.data.data
      });
    }
  };

  const getProductVariantData = async () => {
    {
      setLoading();
      const res = await axios.get(
        '/api/v1/additionalProductInfomation/variant'
      );
      console.log(res.data.data.data);

      dispatch({
        type: SET_PRODUCTVARIANTDATA,
        payload: res.data.data.data
      });
    }
  };

  const onFileSelect = input1 => e => {
    dispatch({
      type: SET_PRODUCTFILEDETAILS,
      payload: {
        input1,
        value1: e.target.files[0].name,
        src: URL.createObjectURL(e.target.files[0])
      }
    });
  };

  const setNutrientData = () => {
    const updatedObj1 = { ...state.nutritionData[0], value: state.protiens };
    const updatedObj2 = {
      ...state.nutritionData[1],
      value: state.carbohydrates
    };
    const updatedObj3 = { ...state.nutritionData[2], value: state.fats };
    const updatedObj4 = { ...state.nutritionData[3], value: state.calories };

    const updatedNutritionData = [
      updatedObj1,
      updatedObj2,
      updatedObj3,
      updatedObj4
    ];

    dispatch({
      type: UPDATE_NUTRITIONDATA,
      payload: updatedNutritionData,
      currentStep: state.step
    });
  };

  const handleSelectedState = (key, Array, value) => {
    console.log(value);
    const objIndex = Array.findIndex(obj => obj[key] === value);
    console.log(objIndex);
    const updatedObj = { ...Array[objIndex], isChecked: true };
    const newData = [updatedObj];

    const updatedArray = [
      ...Array.slice(0, objIndex),
      updatedObj,
      ...Array.slice(objIndex + 1)
    ];
    return { newData, updatedArray };
  };

  const handleUnselectedState = (key, collection, collectionData, value) => {
    const newData = collectionData.filter(obj => obj[key] !== value);

    const objIndex = collection.findIndex(obj => obj[key] === value);
    const updatedObj = { ...collection[objIndex], isChecked: false };
    collection[objIndex] = updatedObj;
    const updatedArray = [...collection];
    return { newData, updatedArray };
  };

  const handleProductStatusChange = e => {
    if (e.target.checked) {
      console.log(e.target.value);
      let { newData, updatedArray } = handleSelectedState(
        `additionalInformation`,
        state.productStatusData,
        e.target.value
      );

      let updatedNewData = state.additionalInformation.concat(newData);
      dispatch({
        type: UPDATE_PRODUCTSTATUSDATA,
        selectedOption: updatedNewData,
        updatedProductStatus: updatedArray
      });
    } else {
      let { newData, updatedArray } = handleUnselectedState(
        `additionalInformation`,
        state.productStatusData,
        state.additionalInformation,
        e.target.value
      );
      dispatch({
        type: UPDATE_PRODUCTSTATUSDATA,
        selectedOption: newData,
        updatedProductStatus: updatedArray
      });
    }
  };

  const handleProductVariantChange = e => {
    if (e.target.checked) {
      console.log(e.target.value);
      let { newData, updatedArray } = handleSelectedState(
        `additionalInformation`,
        state.productVariantData,
        e.target.value
      );

      let updatedNewData = state.additionalInformation.concat(newData);
      dispatch({
        type: UPDATE_PRODUCTVARIANTDATA,
        productVariant: updatedNewData,
        updatedProductVariant: updatedArray
      });
    } else {
      let { newData, updatedArray } = handleUnselectedState(
        `additionalInformation`,
        state.productVariantData,
        state.additionalInformation,
        e.target.value
      );
      dispatch({
        type: UPDATE_PRODUCTVARIANTDATA,
        productVariant: newData,
        updatedProductVariant: updatedArray
      });
    }
  };

  const handleAddOnItemChange = e => {
    if (e.target.checked) {
      console.log(e.target.value);
      let { newData, updatedArray } = handleSelectedState(
        `itemName`,
        state.addOnitemData,
        e.target.value
      );

      let updatedNewData = state.selectedAddOnItemItems.concat(newData);
      dispatch({
        type: UPDATE_ADDONITEMDATA,
        selectedOption: updatedNewData,
        updatedAddOnItem: updatedArray
      });
    } else {
      let { newData, updatedArray } = handleUnselectedState(
        `itemName`,
        state.addOnitemData,
        state.selectedAddOnItemItems,
        e.target.value
      );
      dispatch({
        type: UPDATE_ADDONITEMDATA,
        selectedOption: newData,
        updatedAddOnItem: updatedArray
      });
    }
  };

  const handleAddOnFlavourChange = e => {
    if (e.target.checked) {
      console.log(e.target.value);
      let { newData, updatedArray } = handleSelectedState(
        `itemName`,
        state.addOnFlavourData,
        e.target.value
      );

      let updatedNewData = state.selectedAddOnItemItems.concat(newData);
      dispatch({
        type: UPDATE_ADDONFLAVOURDATA,
        selectedOption1: updatedNewData,
        updatedAddOnItem1: updatedArray
      });
    } else {
      let { newData, updatedArray } = handleUnselectedState(
        `itemName`,
        state.addOnFlavourData,
        state.selectedAddOnItemItems,
        e.target.value
      );
      dispatch({
        type: UPDATE_ADDONFLAVOURDATA,
        selectedOption1: newData,
        updatedAddOnItem1: updatedArray
      });
    }
  };

  const nextStep = () => {
    dispatch({
      type: NEXT_STEP,
      payload: state.step
    });
  };

  const previousStep = () => {
    dispatch({
      type: PREVIOUS_STEP
    });
  };

  const handleChangeFor = input => e => {
    {
      dispatch({
        type: UPDATE_FIELD,
        payload: { input, value: e.target.value }
      });
    }
  };

  const handleChange = input2 => e => {
    const selectedCategory1 = state.categoryData.filter(c => {
      return c.category === e.target.value;
    });
    let IsSubcategory = false;

    if (
      selectedCategory1.length > 0 &&
      selectedCategory1[0].subCategory.length > 0
    ) {
      IsSubcategory = true;
    } else IsSubcategory = false;
    dispatch({
      type: SET_SLECTEDCATEGORY,
      payload: {
        input2,
        value2: e.target.value,
        data: selectedCategory1,
        condition: IsSubcategory
      }
    });
  };

  const [state, dispatch] = useReducer(addProductReducer, initialState);

  return (
    <addProductContext.Provider
      value={{
        Category: state.Category,
        SubCategory: state.SubCategory,
        productName: state.productName,
        productDescription: state.productDescription,
        crossSellPitch: state.crossSellPitch,
        productPrice: state.productPrice,
        categoryData: state.categoryData,
        cuisine: state.cuisine,
        loading: state.loading,
        step: state.step,
        isSubCategory: state.isSubCategory,
        selectedCategory: state.selectedCategory,
        productStatusData: state.productStatusData,
        productVariantData: state.productVariantData,
        addOnitemData: state.addOnitemData,
        addOnFlavourData: state.addOnFlavourData,
        selectedAddOnItemItems: state.selectedAddOnItemItems,
        protiens: state.protiens,
        carbohydrates: state.carbohydrates,
        fats: state.fats,
        calories: state.calories,
        filesrc: state.filesrc,
        additionalInformation: state.additionalInformation,
        fileInputRef,
        productFileName: state.productFileName,
        nextStep,
        previousStep,
        handleChangeFor,
        getCategoryData,
        getProductStatusData,
        handleChange,
        handleProductStatusChange,
        handleAddOnItemChange,
        getAddOnItemData,
        getAddOnFlavourData,
        handleAddOnFlavourChange,
        getProductVariantData,
        handleProductVariantChange,
        setNutrientData,
        onFileSelect
      }}
    >
      {props.children}
    </addProductContext.Provider>
  );
};

export default AddProductState;
