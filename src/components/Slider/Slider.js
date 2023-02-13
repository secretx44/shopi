import 'animate.css';
import React from 'react'; // 
import banner3 from '../../assets/images/banner3.jpg';
import './Slider.scss';
const Slider = () => {


    return (
        <>
            <div className='banner relative'>
                <img src={banner3} alt='' />
                    <div>
                    <svg className='svgIcon mx-auto animate__animated animate__bounce animate__infinite	infinite' width={38} height={38} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="m5.25 8.625 6.75 6.75 6.75-6.75" />
                    </svg>
                </div>
               
            </div>
        </>
      
    )
  
}

export default Slider