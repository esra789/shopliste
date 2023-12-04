import React from 'react';

const Image = ({ productImage }) => {
  return <img src={productImage} alt="Product" style={{ maxWidth: '100%' }} />;
};

export default Image;