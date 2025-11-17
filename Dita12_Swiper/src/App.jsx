import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './App.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
