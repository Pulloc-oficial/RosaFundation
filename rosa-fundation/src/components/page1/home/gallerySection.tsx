import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../index.css'

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const images = [
  "../../images/F1.jpeg",
  "../../images/F2.jpeg",
  "../../images/F3.jpeg",
  "../../images/F1.jpeg",
  "../../images/F2.jpeg",
  "../../images/F3.jpeg",
  "../../images/F1.jpeg",
  "../../images/F2.jpeg",
];

const GallerySection: React.FC = () => {
  return  (
    <section className="bg-white min-h-[calc(100vh-72px)] content-center w-screen overflow-hidden px-0">
        <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};

export default GallerySection;
