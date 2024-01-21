import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'

import AddProductForm from './Components/AddProductForm'
import PurchaseHistory from './Components/PurchaseHistory'
import PurchaseProductForm from './Components/PurchaseProductForm'

function App() {

  const [products, setProducts] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  const addProduct = async (productData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/add-product', productData);
      console.log(response.data);
      // เพิ่มข้อมูลสินค้าลงใน state
      setProducts([...products, response.data.product]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const purchaseProduct = async (productId) => {
    try {
      const response = await axios.post('http://localhost:3000/api/purchase', { productId });
      console.log(response.data);
      // เพิ่มข้อมูลการซื้อลงใน state
      setPurchaseHistory([...purchaseHistory, { productId, date: new Date().toLocaleString() }]);
    } catch (error) {
      console.error('Error purchasing product:', error);
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='p-10'>
          <h1 className='text-2xl'>Product Management System</h1>
          <div className='bg-indigo-600 w-5 h-1 rounded-full'></div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-10/12'>
            <AddProductForm onAddProduct={addProduct} />
          <PurchaseProductForm onPurchaseProduct={purchaseProduct} />
          <div className='pb-5'>
            <h2 className='text-2xl text-indigo-600'>Products</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <strong>Name:</strong> {product.name}, <strong>Quantity :</strong> {product.quantity}
                </li>
              ))}
            </ul>
          </div>
          <PurchaseHistory purchaseHistory={purchaseHistory} />
        </div>
      </div>
    </>
  )
}

export default App
