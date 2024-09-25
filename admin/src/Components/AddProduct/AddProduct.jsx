import React, { useState } from 'react';
import upload_img from '../../assets/upload_img.png';
import './AddProduct.css';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        image: "",
        category: "men",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const add_product = async () => {
        try {
            let responseData;
            let formData = new FormData();
            formData.append('product', image); // Use the correct key expected by the backend

            const uploadResponse = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });

            responseData = await uploadResponse.json();

            if (responseData.success) {
                let prod = { ...product, image: responseData.image_url };

                const addProductResponse = await fetch('http://localhost:4000/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(prod),
                });

                const result = await addProductResponse.json();

                if (result.success) {
                    alert("Product added successfully to the Database");
                } else {
                    alert("Failure, Please try again!");
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred, please try again!");
        }
    };

    return (
        <div className='add-product'>
            <div className='addproduct-itemfield'>
                <p>Product Title</p>
                <input value={product.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
            </div>
            <div className='addproduct-price'>
                <div className='addproduct-itemfield'>
                    <p>Price</p>
                    <input value={product.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here' />
                </div>
                <div className='addproduct-itemfield'>
                    <p>Offer Price</p>
                    <input value={product.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className='addproduct-itemfield'>
                <p>Product Category</p>
                <select value={product.category} onChange={changeHandler} name='category' className='product_category'>
                    <option value="men">Mens</option>
                    <option value="women">Womens</option>
                    <option value="kid">Kids</option>
                </select>
            </div>
            <div className='addproduct-itemfield'>
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload_img} className='upload_container' alt="" />
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
            </div>
            <button onClick={add_product} className='addproduct_btn'>Add To Database</button>
        </div>
    );
};

export default AddProduct;