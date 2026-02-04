import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import { Carousel } from "react-responsive-carousel";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mt-[80px] md:mt-[90px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
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
        <SwiperSlide>
          <img src={banner1} alt="Banner 1" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Banner 2" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="Banner 3" className="w-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
