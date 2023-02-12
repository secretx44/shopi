import React from 'react'; // 
import Sliders from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import './Slider.scss';
const Slider = () => {
    const settings = {
                //   dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
    }

    return (
        <Sliders {...settings}> 
            <img src={banner1} alt="" className='b1'/>
            <img src={banner2} alt="" className='b1'/>
            <img src={banner3} alt="" className='b1'/>
        </Sliders>
    )
  
}

export default Slider