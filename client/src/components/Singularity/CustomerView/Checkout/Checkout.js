import React, { Fragment } from 'react';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import {
  PTSansText,
  SacramentoText
} from 'styles/Singularity/ApplicationStyles/TextStyles';
import { PartialWidthDivider } from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import {
  InputLabel,
  InputText,
  InputTextContainer,
  RadioButtonRound
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';

import {
  CopyButton,
  ActionButton
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';
import {
  ContentContainer,
  ThankYouMessage
} from 'styles/Singularity/CustomerView/CheckoutPage';

const Checkout = () => {
  return (
    <Fragment>
      <ContentContainer>
        <LogoImage src={PiattoLogo} height="74px" width="115px" />
        <SacramentoText fontSize="26px" color="#DAA520">
          Hé Patron de Piatto !
        </SacramentoText>
        <PTSansText fontSize="14px" color="#DAA520" fontStyle="italic">
          We thank you for placing your order with us. We would kindly request
          you to provide the below details to facilitate the delivery of your
          order.
        </PTSansText>

        <PartialWidthDivider />
        <InputTextContainer>
          <InputLabel>Gender</InputLabel>
          <RadioButtonRound />
          <PTSansText fontSize="14px" color="black">
            Miss
          </PTSansText>
          <RadioButtonRound />
          <PTSansText fontSize="14px" color="black">
            Mrs
          </PTSansText>
          <RadioButtonRound />
          <PTSansText fontSize="14px" color="black">
            Mr
          </PTSansText>
        </InputTextContainer>
        <InputTextContainer>
          <InputLabel>Name</InputLabel>
          <InputText>Ketan Shingade</InputText>
        </InputTextContainer>
        <InputTextContainer>
          <InputLabel>Mobile Number</InputLabel>
          <InputText>9850263166</InputText>
        </InputTextContainer>
        <InputTextContainer>
          <InputLabel>Delivery Address</InputLabel>
          <InputText>E-205, Mahalaxmi CHS, Worli</InputText>
        </InputTextContainer>
        <InputTextContainer>
          <InputLabel>Landmark</InputLabel>
          <InputText>Opposite Paragon Centre</InputText>
        </InputTextContainer>
        <InputTextContainer>
          <InputLabel>Pincode</InputLabel>
          <InputText>400030</InputText>
        </InputTextContainer>
        <InputTextContainer>
          <InputLabel>Other Instructions</InputLabel>
          <InputText>Please add less sugar in coffee</InputText>
        </InputTextContainer>
        <PTSansText fontSize="14px" color="#DAA520">
          Payment Methods
        </PTSansText>
        <InputTextContainer style={{ marginTop: '15px' }}>
          <InputLabel>UPI ID</InputLabel>
          <PTSansText fontSize="14px" color="#000000">
            smaranshetty@okaxisbank
          </PTSansText>
          <CopyButton>Copy</CopyButton>
        </InputTextContainer>
        <ActionButton width="360px">
          <SacramentoText fontSize="36px" color="#000000">
            Submit
          </SacramentoText>
        </ActionButton>
      </ContentContainer>
    </Fragment>
  );
};

export default Checkout;
