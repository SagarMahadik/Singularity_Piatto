import React, { Fragment, useState, useEffect, useContext } from 'react';

import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles/';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import { PageHeader } from 'styles/Singularity/ApplicationStyles/PageHeader';
import { FullWidthDivider } from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import {
  InputLabel,
  InputText,
  InputTextContainer,
  UploadImageBackground,
  InputParagraph,
  InputSelect,
  InputOption
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';

import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import {
  ActionButton,
  ButtonText,
  ButtonContainer
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';
import { CenterAlignedColumnContainer } from 'styles/Singularity/ApplicationStyles/ContainerStyles';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

const AddProductPage1 = () => {
  useEffect(() => {
    getCategoryData();
  }, []);

  const AddProductContext = useContext(addProductContext);

  const {
    Category,
    SubCategory,
    productName,
    productDescription,
    crossSellPitch,
    productPrice,
    categoryData,
    loading,
    step,
    nextStep,
    previousStep,
    handleChangeFor,
    isSubCategory,
    getCategoryData,
    selectedCategory,
    handleChange
  } = AddProductContext;

  return (
    <Fragment>
      <LogoImage src={PiattoLogo} height="74px" width="115px" />
      <PageHeader>
        <PTSansText fontSize="24px" color="#DAA520">
          Add Product to Menu
        </PTSansText>
      </PageHeader>
      <FullWidthDivider />
      <CenterAlignedColumnContainer>
        <InputTextContainer>
          <InputLabel for="Category">Category</InputLabel>
          <InputSelect
            value={Category}
            name="Category"
            onChange={handleChange('Category')}
          >
            <InputOption value="" style={{ display: 'none' }}>
              {' '}
              Please select
            </InputOption>
            {categoryData.map((c, index) => {
              return <InputOption>{c.category}</InputOption>;
            })}
          </InputSelect>
        </InputTextContainer>
        {isSubCategory && (
          <InputTextContainer>
            <InputLabel for="subCategory">Sub Category</InputLabel>
            <InputSelect
              value={SubCategory}
              name="SubCategory"
              onChange={handleChangeFor('SubCategory')}
            >
              <InputOption value="" style={{ display: 'none' }}>
                {' '}
                Please select
              </InputOption>
              {selectedCategory.map((category, index) =>
                category.subCategory.map(subcategory => {
                  {
                    return <InputOption>{subcategory}</InputOption>;
                  }
                })
              )}
            </InputSelect>
          </InputTextContainer>
        )}
        <InputTextContainer>
          <InputLabel for="productName">Product Name</InputLabel>
          <InputText
            value={productName}
            type="text"
            name="productName"
            onChange={handleChangeFor('productName')}
          />
        </InputTextContainer>
        <InputTextContainer>
          <InputLabel for="productDescription">
            Description of ingradients
          </InputLabel>
          <InputParagraph
            value={productDescription}
            type="text"
            name="productDescription"
            onChange={handleChangeFor('productDescription')}
          />
        </InputTextContainer>
        <InputTextContainer>
          <InputLabel for="crossSellPitch">This goes well with..</InputLabel>
          <InputParagraph
            type="text"
            value={crossSellPitch}
            name={crossSellPitch}
            onChange={handleChangeFor('crossSellPitch')}
          />
        </InputTextContainer>
        <InputTextContainer>
          <InputLabel for="productPrice">Price (Rs.)</InputLabel>
          <InputText
            type="number"
            value={productPrice}
            name={productPrice}
            onChange={handleChangeFor('productPrice')}
          />
        </InputTextContainer>
        <ActionButton width="156px" value="submit" onClick={nextStep}>
          <ButtonText>Next</ButtonText>
        </ActionButton>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default AddProductPage1;
