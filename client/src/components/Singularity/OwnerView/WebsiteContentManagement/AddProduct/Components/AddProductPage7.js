import React, { Fragment, useEffect, useContext } from 'react';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles/';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import { PageHeader } from 'styles/Singularity/ApplicationStyles/PageHeader';
import {
  FullWidthDivider,
  PartialWidthDivider
} from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import {
  InputLabel,
  IconCheckBoxRound,
  CheckBoxIcon,
  CheckBoxIconName,
  IconCheckBoxRoundButton,
  HiddenCheckbox
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';
import {
  ActionButton,
  ButtonText
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';

import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import {
  CenterAlignedColumnContainer,
  FlexRowContainer,
  FlexColumnContainer,
  FormSectionNameContainer
} from 'styles/Singularity/ApplicationStyles/ContainerStyles';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

import {
  ProductImage,
  ProductDescription,
  ProductAdditionalInformationContainer,
  AdditionalInformation,
  MainAdditionalInformation,
  ProductNamePriceContainer
} from 'styles/Singularity/OwnerView/ReviewDetails';

import VegIcon from 'components/Singularity/ApplicationView/VegIcon.js';
import NonVegIcon from 'components/Singularity/ApplicationView/NonVegIcon.js';

const AddProductPage7 = () => {
  const AddProductContext = useContext(addProductContext);

  const {
    filesrc,
    setNutrientData,
    productName,
    productDescription,
    additionalInformation,
    productPrice,
    selectedAddOnItemItems,
    cuisine
  } = AddProductContext;

  let isVeg = false;
  if (cuisine === 'veg') {
    isVeg = true;
  }

  return (
    <Fragment>
      <LogoImage src={PiattoLogo} height="74px" width="115px" />
      <PageHeader>
        <PTSansText fontSize="24px" color="#DAA520">
          Preview
        </PTSansText>
      </PageHeader>
      <FullWidthDivider />
      <FlexRowContainer width="350px">
        <ProductImage src={filesrc} />
        <MainAdditionalInformation>
          {isVeg ? <VegIcon /> : <NonVegIcon />}
          <PTSansText fontSize="14px">{productName}</PTSansText>

          <ProductDescription>
            <PTSansText fontSize="12px" color="#BDBDBD">
              {productDescription}
            </PTSansText>
          </ProductDescription>
          <ProductAdditionalInformationContainer>
            {additionalInformation.map((information, index) => {
              return (
                <FlexColumnContainer>
                  <IconCheckBoxRound style={{ height: '30px', width: '30px' }}>
                    <CheckBoxIcon
                      src={information.additionalInformationIconURL}
                      style={{ height: '20px', width: '20px' }}
                    />
                  </IconCheckBoxRound>
                  <AdditionalInformation>
                    <PTSansText fontSize="9px">
                      {information.additionalInformation}
                    </PTSansText>
                  </AdditionalInformation>
                </FlexColumnContainer>
              );
            })}
          </ProductAdditionalInformationContainer>
        </MainAdditionalInformation>
      </FlexRowContainer>

      <FullWidthDivider style={{ marginTop: '15px' }} />
      <ProductNamePriceContainer>
        <PTSansText fontSize="14px">{productName}</PTSansText>
        <PTSansText fontSize="14px">{productPrice}</PTSansText>
      </ProductNamePriceContainer>
      <FullWidthDivider />
      <CenterAlignedColumnContainer>
        <FlexRowContainer width="310px" marginTop="10px">
          {selectedAddOnItemItems.map((item, index) => {
            {
              return (
                <IconCheckBoxRoundButton>
                  <IconCheckBoxRound>
                    <CheckBoxIcon src={item.itemIconURL} />
                  </IconCheckBoxRound>
                  <InputLabel for={item.itemName} style={{ marginTop: '15px' }}>
                    <CheckBoxIconName>
                      <PTSansText fontSize="16px">{item.itemName}</PTSansText>
                    </CheckBoxIconName>
                    <CheckBoxIconName>
                      <PTSansText fontSize="16px">
                        <span>Rs. </span>
                        {item.itemPrice}
                      </PTSansText>
                    </CheckBoxIconName>
                  </InputLabel>
                </IconCheckBoxRoundButton>
              );
            }
          })}
        </FlexRowContainer>

        <ActionButton width="156px" value="submit" onClick={setNutrientData}>
          <ButtonText>Preview</ButtonText>
        </ActionButton>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default AddProductPage7;
