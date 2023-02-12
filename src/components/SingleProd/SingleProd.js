import React, { useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../store/cartSlice';
import { setIsModalVisible } from '../../store/modalSlice';
import { formatPrice } from '../../utils/helpers';
import './SingleProd.scss';

const SingleProd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const { data: product } = useSelector(state => state.modal);

  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    })
  }

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if(newQty < 1){
        newQty = 1;
      }
      return newQty;
    })
  }

  const addToCartHandler = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice
    }
    dispatch(addToCart(tempProduct));
    dispatch(setIsModalVisible(false));
    navigate('/cart');
  };

  const modalOverlayHandler = (e) => {
    if(e.target.classList.contains('overlay-bg')){
      dispatch(setIsModalVisible(false));
    }
  }

  return (
    <div className='overlay-bg' onClick = {modalOverlayHandler}>
      <div className = "product-details-modal bg-white">
        <button type = "button" className='modal-close-btn flex flex-center fs-14' onClick={() => dispatch(setIsModalVisible(false))}>
          <FaTimes/>
        </button>
        <div className = "details-content grid">
          {/* details left */}
          <div className = "details-right">
            <div className = "details-img">
              <img src = {product.images[0]} alt = {product.title} />
            </div>
          </div>
          {/* detials right */}
          <div className='details-left'>
            <div className = "details-info">
              <h3 className = "title text-regal-blue fs-22 fw-5">{product.title}</h3>
              <p className='description text-pine-green'>{product.description}</p>
              <div className='price fw-7 fs-24'>Price: {formatPrice(product.price)}</div>
              <div className = "qty flex">
                <span className = "text-light-blue qty-text">Qty: </span>
                <div className = "qty-change flex">
                  <button type = "button" className='qty-dec fs-14' onClick={() => decreaseQty()}>
                     <AiOutlineMinus className='mx-auto'/>
                  </button>
                  <span className = "qty-value flex flex-center">{qty}</span>
                  <button type = "button" className='qty-inc fs-14 text-light-blue' onClick={() => increaseQty()}>
                    <BsPlusLg className='mx-auto'/>
                  </button>
                </div>
              </div>
              <button type = "button" className='btn add-to-cart-btn' onClick={() => addToCartHandler(product)}>
                  <span className = "btn-icon">
                    <i className='fas fa-cart-shopping'></i>
                  </span>
                  <span className=''>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProd