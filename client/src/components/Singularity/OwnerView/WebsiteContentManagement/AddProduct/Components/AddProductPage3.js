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
  IconCheckBoxRound,
  CheckBoxIcon,
  CheckBoxIconName,
  IconCheckBoxRoundButton,
  HiddenCheckbox,
  HiddenRadioButton,
  IconRadioButtonRound
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

import vegIcon from 'img/piatto/icons/vegicon.svg';
import nonVegIcon from 'img/piatto/icons/nonvegicon.svg';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

const AddProductPage3 = () => {
  const [isVeg, setIsVeg] = useState(false);

  const [isNonVeg, setIsNonVeg] = useState(false);

  const AddProductContext = useContext(addProductContext);

  const {
    productStatusData,
    getProductStatusData,
    handleProductStatusChange,
    nextStep,
    handleChangeFor,
    cuisine
  } = AddProductContext;

  useEffect(() => {
    getProductStatusData();
    if (cuisine === 'veg') {
      setIsVeg(true);
      setIsNonVeg(false);
    }
    if (cuisine === 'Non veg') {
      setIsVeg(false);
      setIsNonVeg(true);
    }
  }, [cuisine]);

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
          <IconRadioButtonRound checked={isVeg}>
            <CheckBoxIcon src={vegIcon} />
          </IconRadioButtonRound>
          <HiddenRadioButton
            name="cuisine"
            value="veg"
            onChange={handleChangeFor('cuisine')}
          />
          <IconRadioButtonRound checked={isNonVeg}>
            <CheckBoxIcon src={nonVegIcon} />
          </IconRadioButtonRound>
          <HiddenRadioButton
            name="cuisine"
            value="Non veg"
            onChange={handleChangeFor('cuisine')}
          />
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
