/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// images
import carousel1 from '/4.png';
import carousel2 from '/5.png';
import carousel3 from '/6.png';

// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[EffectFade ,Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={carousel2} alt="" className='m-auto'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={carousel1} alt="" className='m-auto'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={carousel3} alt="" className='m-auto'/>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
