import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext
} from 'react';
import AddProductPage1 from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddProductPage1.js';
import AddProductPage2 from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddProductPage2.js';
import AddProductPage3 from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddProductPage3.js';
import AddProductPage4 from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddProductPage4.js';
import AddProductPage5 from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddProductPage5.js';
import AddProductPage6 from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddProductPage6.js';
import AddProductPage7 from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddProductPage7.js';
import AddProductState from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/AddProductState.js';
import axios from 'axios';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

function AddProduct() {
  const AddProductContext = useContext(addProductContext);

  const { step } = AddProductContext;
  console.log(step);

  switch (step) {
    case 1:
      return <AddProductPage1 />;

    case 2:
      return <AddProductPage2 />;
    case 3:
      return <AddProductPage3 />;

    case 4:
      return <AddProductPage4 />;
    case 5:
      return <AddProductPage5 />;
    case 6:
      return <AddProductPage6 />;
    case 7:
      return <AddProductPage7 />;
  }
}

export default AddProduct;
