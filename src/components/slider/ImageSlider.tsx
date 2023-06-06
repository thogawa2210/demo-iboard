import "react-responsive-carousel/lib/styles/carousel.min.css";
import ChartWrap from "../chartWrap/ChartWrap";
// import Slider from "react-slick";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./customSlide.css";
import { useRef, useState } from "react";

const ImageSlider = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <div className="flex w-full">
      <div ref={(node) => setPrevEl(node)}>prev</div>
      <Swiper
        navigation={{ prevEl, nextEl }}
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
      >
        <SwiperSlide>
          <ChartWrap data={"VN100"} />
        </SwiperSlide>
        <SwiperSlide>
          <ChartWrap data={"VN100"} />
        </SwiperSlide>
        <SwiperSlide>
          <ChartWrap data={"VN100"} />
        </SwiperSlide>
        <SwiperSlide>
          <ChartWrap data={"VN100"} />
        </SwiperSlide>
        <SwiperSlide>
          <ChartWrap data={"VN100"} />
        </SwiperSlide>
      </Swiper>
      
      <div ref={(node) => setNextEl(node)}>next</div>
    </div>
  );
};

export default ImageSlider;
