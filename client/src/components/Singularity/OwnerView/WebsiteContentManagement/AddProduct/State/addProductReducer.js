import {
  SET_LOADING,
  NEXT_STEP,
  PREVIOUS_STEP,
  UPDATE_FIELD,
  SET_PRODUCTFILEDETAILS,
  POST_ADDON,
  SET_FILEURL,
  COMPLETE_FORM,
  SET_CATEGORYDATA,
  SET_SLECTEDCATEGORY,
  SET_PRODUCTSTATUSDATA,
  UPDATE_PRODUCTSTATUSDATA,
  SET_ADDONITEMDATA,
  UPDATE_ADDONITEMDATA,
  UPDATE_ADDONFLAVOURDATA,
  SET_ADDONFLAVOURDATA,
  SET_PRODUCTVARIANTDATA,
  UPDATE_PRODUCTVARIANTDATA,
  UPDATE_NUTRITIONDATA
} from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/types.js';

export default (state, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: action.payload + 1
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case UPDATE_FIELD:
      const { input, value } = action.payload;
      return {
        ...state,
        [input]: value
      };
    case SET_PRODUCTFILEDETAILS:
      const { input1, value1, src } = action.payload;
      return {
        ...state,
        [input1]: value1,
        filesrc: src,
        loading: false
      };
    case SET_FILEURL:
      return {
        ...state,
        itemIconURL: action.payload,
        loading: false
      };
    case COMPLETE_FORM:
      return {
        ...state,
        isComplete: true
      };

    case SET_CATEGORYDATA:
      return {
        ...state,
        categoryData: action.payload,
        loading: false
      };

    case SET_SLECTEDCATEGORY:
      const { input2, value2, data, condition } = action.payload;
      return {
        ...state,
        selectedCategory: data,
        [input2]: value2,
        isSubCategory: condition
      };
    case SET_PRODUCTSTATUSDATA:
      return {
        ...state,
        productStatusData: action.payload,
        loading: false
      };

    case UPDATE_PRODUCTSTATUSDATA:
      return {
        ...state,
        productStatusData: action.updatedProductStatus,
        additionalInformation: action.selectedOption
      };
    case SET_ADDONITEMDATA:
      return {
        ...state,
        addOnitemData: action.payload
      };

    case UPDATE_ADDONITEMDATA:
      return {
        ...state,
        addOnitemData: action.updatedAddOnItem,
        selectedAddOnItemItems: action.selectedOption
      };
    case SET_ADDONFLAVOURDATA:
      return {
        ...state,
        addOnFlavourData: action.payload
      };
    case UPDATE_ADDONFLAVOURDATA:
      return {
        ...state,
        addOnFlavourData: action.updatedAddOnItem1,
        selectedAddOnItemItems: action.selectedOption1
      };
    case SET_PRODUCTVARIANTDATA:
      return {
        ...state,
        productVariantData: action.payload
      };

    case UPDATE_PRODUCTVARIANTDATA:
      return {
        ...state,
        productVariantData: action.updatedProductVariant,
        additionalInformation: action.productVariant
      };
    case UPDATE_NUTRITIONDATA:
      return {
        ...state,
        nutritionData: action.payload,
        step: action.currentStep + 1
      };
  }
};
