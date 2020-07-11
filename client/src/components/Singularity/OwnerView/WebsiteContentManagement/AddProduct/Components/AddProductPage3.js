import React, { Fragment, useState, useEffect, useContext } from 'react';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles/';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import { PageHeader } from 'styles/Singularity/ApplicationStyles/PageHeader';
import {
  PartialWidthDivider,
  FullWidthDivider
} from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import {
  InputLabel,
  InputText,
  InputTextContainer,
  UploadImageBackground,
  InputParagraph,
  InputSelect,
  InputOption,
  IconCheckBoxRound,
  CheckBoxIcon,
  CheckBoxIconName,
  IconCheckBoxRoundButton,
  HiddenCheckbox
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';
import {
  ActionButton,
  ButtonText,
  ButtonContainer
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';

import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import {
  AddProductContainer,
  CenterAlignedColumnContainer,
  FlexRowContainer,
  FormSectionNameContainer
} from 'styles/Singularity/ApplicationStyles/ContainerStyles';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

const AddProductPage3 = () => {
  useEffect(() => {
    getProductStatusData();
  }, []);

  const AddProductContext = useContext(addProductContext);

  const {
    productStatusData,
    getProductStatusData,
    handleProductStatusChange,
    nextStep
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
        <FormSectionNameContainer>
          <PTSansText fontSize="16px" color="#DAA520">
            Product Type
          </PTSansText>
        </FormSectionNameContainer>
        <FlexRowContainer width="183px">
          <IconCheckBoxRound />
          <IconCheckBoxRound />
        </FlexRowContainer>
        <PartialWidthDivider />
        <FormSectionNameContainer>
          <PTSansText fontSize="16px" color="#DAA520">
            Product Status
          </PTSansText>
        </FormSectionNameContainer>

        <FlexRowContainer width="310px">
          {productStatusData.map((product, index) => {
            {
              return (
                <IconCheckBoxRoundButton>
                  <HiddenCheckbox
                    key={index}
                    name={product._id}
                    value={product.additionalInformation}
                    onChange={e => handleProductStatusChange(e)}
                  />
                  <IconCheckBoxRound checked={product.isChecked}>
                    <CheckBoxIcon src={product.additionalInformationIconURL} />
                  </IconCheckBoxRound>
                  <InputLabel
                    for={product.productStatus}
                    style={{ marginTop: '15px' }}
                  >
                    <CheckBoxIconName>
                      <PTSansText fontSize="16px">
                        {product.additionalInformation}
                      </PTSansText>
                    </CheckBoxIconName>
                  </InputLabel>
                </IconCheckBoxRoundButton>
              );
            }
          })}
        </FlexRowContainer>
        <PartialWidthDivider style={{ marginTop: '100px' }} />
        <ButtonContainer>
          <ActionButton width="156px" value="submit" onClick={nextStep}>
            <ButtonText>Next</ButtonText>
          </ActionButton>
        </ButtonContainer>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default AddProductPage3;
