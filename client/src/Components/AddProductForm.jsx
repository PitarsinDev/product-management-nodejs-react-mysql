import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState('');
    const [hiddenText, setHiddenText] = useState('');
  
    const handleAddProduct = async () => {
      const productData = { name, quantity, image, hiddenText };
      const addedProduct = await onAddProduct(productData);
      // ล้างค่าหลังจากเพิ่มสินค้า
      setName('');
      setQuantity(0);
      setImage('');
      setHiddenText('');
    };

  return (
    <div className='py-5'>
      <h2 className='text-indigo-600 text-2xl pb-5'>Add Product</h2>
      <div>
        <form>
            <div className='flex gap-2'>
                <label>Name :</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border border-indigo-600 pl-2 rounded-md'/>
            </div>
            <br />
            <div className='flex gap-2'>
                <label>Quantity :</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className='border border-indigo-600 pl-2 rounded-md'/>
            </div>
            <br />
            <div className='flex gap-2'>
                <label>Image URL :</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className='border border-indigo-600 pl-2 rounded-md'/>
            </div>
            <br />
            <div className='flex gap-2'>
                <label>Hidden Text :</label>
                <input type="text" value={hiddenText} onChange={(e) => setHiddenText(e.target.value)} className='border border-indigo-600 pl-2 rounded-md'/>
            </div>

            <div className='pt-5'>
                <button type="button" onClick={handleAddProduct} className='bg-indigo-600 text-white rounded-md px-5 py-1 shadow-md'>Add Product</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;