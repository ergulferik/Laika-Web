import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles/Gallery.css';

import { Autoplay, EffectCoverflow } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={true}
        speed={1000}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="assets/laikaCoffee1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/laikaCoffee2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/laikaCoffee3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/laikaCoffee4.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/laikaCoffee5.jpeg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
