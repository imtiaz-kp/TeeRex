import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const [total, setTotal] = useState(0);
  const cartArray = useSelector((state) => state.cartReducer);
  const navigate = useNavigate();

  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2));
    } else {
      setTotal(0);
    }
  };

  useEffect(() => {
    getCartTotal();
  }, [cartArray]);

  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(emptyCart());
    alert('Order successfully placed. Thank you for purchasing with us!');
    navigate('/');
  };

  return (
    <div className='container mt-5'>
      {cartArray?.length > 0 ? (
        <div className='row mt-5'>
          <div className='col-lg-7'>
            <div className='table-responsive'>
              <table className='table shadow border'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {cartArray?.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>
                        <img width={'100px'} height={'100px'} src={product.image} alt='' />
                      </td>
                      <td>${product.price}</td>
                      <td>
                        <button onClick={() => dispatch(removeFromCart(product.id))} className='btn'>
                          <i className='fa-solid fa-trash text-danger'></i>
                        </button>
                      </td>
                      <td>
                        <button onClick={handleCart} className='btn border btn-success'>
                          <i style={{ color: '#1964e6' }} className='fa-solid fa-bag-shopping fa-bounce'></i> Buy
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-4'>
            <div className='border p-3 rounded shadow'>
              <h1 className='text-primary'>Cart Summary</h1>
              <h4>Total Products: <span>{cartArray.length}</span></h4>
              <h4 className='mt-3'>Total: <span className='text-danger fw-bolder fs-2'>$ {total}</span></h4>
              <div className='d-grid'>
                <button onClick={handleCart} className='btn btn-success mt-5 rounded'>
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: '40vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'200px'} src='https://bakestudio.in/assets/images/cart/empty-cart.gif' alt='' />
          <h3 className='text-primary fw-bold fs-4'>Your Cart is empty</h3>
          <Link style={{ textDecoration: 'none' }} to={'/'} className='btn btn-success rounded mt-3'>
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
