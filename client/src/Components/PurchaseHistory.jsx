import React from 'react';

const PurchaseHistory = ({ purchaseHistory }) => {
  return (
    <div>
      <h2 className='text-2xl text-indigo-600'>Purchase History</h2>
      <ul>
        {purchaseHistory.map((purchase, index) => (
          <li key={index} className='py-4'>
            <span className='text-indigo-600'><strong>Product ID :</strong> {purchase.productId}</span> <span className='text-orange-600'><strong>Time :</strong> {purchase.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseHistory;