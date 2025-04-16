import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../index.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
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
