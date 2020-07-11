/**
 * GenreDetails.js
 * Index file of the component
 * Future scope - Randomize the indexes in array
 */

import React, { useContext, Fragment, useState } from 'react';

import gelato from 'img/piatto/gelato.JPG';

import {
  CategoryContainer,
  Category,
  CategoryName,
  CategoryImage,
  CategoryImageWrapper
} from 'styles/Singularity/OwnerView/CategoryDetails/CategoryDetails';

const CategoryDetails = () => {
  return (
    <Fragment>
      <CategoryContainer>
        <CategoryImageWrapper>
          <Category>
            <CategoryImage src={gelato} />
            <CategoryName>Gelato!</CategoryName>
          </Category>
        </CategoryImageWrapper>
        <CategoryImageWrapper>
          <Category>
            <CategoryImage src={gelato} />
            <CategoryName>Gelato!</CategoryName>
          </Category>
        </CategoryImageWrapper>
        <CategoryImageWrapper>
          <Category>
            <CategoryImage src={gelato} />
            <CategoryName>Gelato!</CategoryName>
          </Category>
        </CategoryImageWrapper>
        <CategoryImageWrapper>
          <Category>
            <CategoryImage src={gelato} />
            <CategoryName>Gelato!</CategoryName>
          </Category>
        </CategoryImageWrapper>
      </CategoryContainer>
    </Fragment>
  );
};

export default CategoryDetails;
