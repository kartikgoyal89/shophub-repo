import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
const CartItems = () => {
  const { getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  // console.log(getTotalCartItems);
  if(getTotalCartItems()===0)
  {
    if(localStorage.getItem('auth-token'))
    {
        return(
        <div className='h-screen px-8'>
        <div className="grid grid-cols-5 gap-4 px-4 pt-10 text-center font-bold text-white">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Amount</p>
        </div>
        <hr className="mb-4 bg-white h-1" />
        <br/>
          <div className=' text-white'>
            <h2 className='text-center'>No Products to display!</h2>
          </div>
        </div>
        )
    }
    else
    {
        alert("Login to continue");
        window.location.replace("/loginSignup");
    }
  }
  else
  {
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-5 gap-4 mb-4 text-center font-bold text-white">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Amount</p>
        </div>
        <hr className="mb-4 bg-white h-1" />
        {all_products.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id} className="mb-4 text-white">
                <div className="grid grid-cols-5 gap-4 items-center text-center">
                  <Link className='m-10' to='/product'>
                    <img src={e.image} alt={e.name} className="w-20 h-20 object-contain" />
                  </Link>
                  <p>{e.name}</p>
                  <p>₹{e.new_price ? e.new_price : 'N/A'}</p>
                  <div>
                    <button className="btn btn-outline-danger !border-r-0 !rounded-r-none " onClick={() => removeFromCart(e.id)}>-</button>
                    <button className="btn btn-outline-secondary !border-r-0 !border-l-0 !rounded-none text-white">{cartItems[e.id]}</button>
                    <button className="btn btn-outline-success !border-l-0 !rounded-l-none" onClick={() => addToCart(e.id)}>+</button>
                  </div>
                  <p>₹{e.new_price && cartItems[e.id] ? e.new_price * cartItems[e.id] : 'N/A'}</p>
                </div>
                <hr className="mt-4" />
              </div>
            );
          }
          return null;
        })}
        <div className="flex justify-between mt-8">
          <div className="bg-gray-100 p-4 rounded shadow-md w-1/2 mr-4">
            <h1 className="text-xl font-bold mb-4">Cart Total</h1>
            <div>
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="flex justify-between mb-2">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="flex justify-between mb-4">
                <h3>Total</h3>
                <h3>₹{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className="btn btn-primary w-full">Proceed to Buy</button>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md w-1/2">
            <p className="mb-4">If you have a Promo code, enter it here:</p>
            <div className="flex">
              <input type="text" className="form-control mr-2" placeholder="Promo code" />
              <button className="btn btn-secondary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CartItems;