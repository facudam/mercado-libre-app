import '../styles/Slider.css';
import img1 from '../images/slide1img.webp';
import img2 from '../images/slide2img.webp';
import img3 from '../images/slide3img.webp';
import img4 from '../images/slide4img.webp';
import img5 from '../images/slide5img.webp';
import img6 from '../images/slide6img.webp';

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default () => {
  
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      navigation
      pagination={{ clickable: true }} 
    >
      <SwiperSlide><a href=''><img src={img1} alt=''/></a></SwiperSlide>
      <SwiperSlide><a href=''><img src={img2} alt=''/></a></SwiperSlide>
      <SwiperSlide><a href=''><img src={img3} alt=''/></a></SwiperSlide>
      <SwiperSlide><a href=''><img src={img4} alt=''/></a></SwiperSlide>
      <SwiperSlide><a href=''><img src={img5} alt=''/></a></SwiperSlide>
      <SwiperSlide><a href=''><img src={img6} alt=''/></a></SwiperSlide>
      ...
    </Swiper>
  );
};