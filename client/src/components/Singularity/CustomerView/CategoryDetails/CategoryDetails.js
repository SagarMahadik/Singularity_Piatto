import React, { Fragment } from 'react';
import {
  CategoryDetailsBackground,
  LogoCartContainer,
  CategoryDetailsContainerBackground,
  CategoryDetailsContainer,
  Category,
  CategoryName
} from 'styles/Singularity/CustomerView/CategoryDetails';

import { InputDropdown } from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';

import gelato from 'img/piatto/gelato.JPG';

const CategoryDetails = () => {
  return (
    <CategoryDetailsBackground>
      <LogoCartContainer>
        <InputDropdown />
      </LogoCartContainer>
      <CategoryDetailsContainerBackground />
      <CategoryDetailsContainer>
        <Category>
          <CategoryName>Macaron</CategoryName>
        </Category>
      </CategoryDetailsContainer>
      <CategoryDetailsContainer>
        <Category>
          <CategoryName>Macaron</CategoryName>
        </Category>
      </CategoryDetailsContainer>
    </CategoryDetailsBackground>
  );
};

export default CategoryDetails;
