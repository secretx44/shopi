import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../../store/cartSlice';
import { fetchCategories } from '../../store/categorySlice';
import "./Nav.scss";

const Nav = () => {
  const dispatch = useDispatch();
  const {data: categories} = useSelector((state) => state.category);
  const {totalItems} = useSelector((state => state.cart));

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
   <nav className = "navbar">
      <div className='navbar-content'>
        <div className = "container">
          <div className = "navbar-top flex flex-between">
              <Link to = "/" className = "navbar-brand">
                <span className = "text-regal-blue">SHO</span><span className='text-gold'>PIYEY.</span>
              </Link>
            <div className = "navbar-btns flex">
              <form className = "navbar-search flex">
                <input type = "text" placeholder='Search here ...' />
                <button type = "submit" className = "navbar-search-btn">
                  <BsSearch className='mx-auto'/>
                </button>
              </form>

             
                <Link to = "/cart" className="add-to-cart-btn flex">
                  <span className = "btn-ico">
                    <i className = "fas fa-shopping-cart"></i>
                  </span>
                  <div className='btn-txt fw-5'>Cart
                    <span className='cart-count-value'>{totalItems}</span>
                  </div>
                </Link>
              </div>
          </div>
        </div>
        
        <div className='navbar-bottom bg-regal-blue'>
          <div className='container flex flex-between'>
            <ul className = {`nav-links flex ${isSidebarOpen ? 'show-nav-links' : ""}`}>
              <button type = "button" className='navbar-hide-btn text-white' onClick={() => setIsSidebarOpen(false)}>
                <FaTimes/>
              </button>
              {
                categories.map(category => (
                  <li key = {category.id}><Link to = {`/category/${category.id}`} className = "nav-link text-white" onClick={() => setIsSidebarOpen(false)}>{category.name}</Link></li>
                ))
              }
            </ul>

            <button type = "button" className='navbar-show-btn text-gold' onClick={() => setIsSidebarOpen(true)}>
              <RxHamburgerMenu/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;