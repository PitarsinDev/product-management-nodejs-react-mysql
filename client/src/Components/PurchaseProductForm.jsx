import React, { useState } from 'react';

const PurchaseProductForm = ({ onPurchaseProduct }) => {
  const [productId, setProductId] = useState('');

  const handlePurchaseProduct = () => {
    onPurchaseProduct(productId);
    setProductId('');
  };

  return (
    <div>
      <h2 className='text-2xl text-indigo-600'>Purchase Product</h2>
      <div className='py-5'>
        <form>
            <div className='flex gap-2'>
                <label>Product ID :</label>
                <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} className='border border-indigo-600 pl-2 rounded-md'/>
            </div>

            <div className='pt-5'>
                <button type="button" onClick={handlePurchaseProduct} className='bg-indigo-600 px-5 py-1 rounded-md shadow-md text-white'>Purchase</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseProductForm;