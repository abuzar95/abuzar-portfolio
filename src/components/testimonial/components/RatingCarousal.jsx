import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useData } from "../../../DataContext";
import "./RatingCarousel.css";
import useMobileView from "../../../assets/hooks/useMobileView";

export const RatingCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const isMobile = useMobileView();
  const { data } = useData();
  const baseURL = process.env.REACT_APP_URL;

  const testimonials = data?.testimonials || [];

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="w-full relative">
      <Swiper
        ref={swiperRef}
        slidesPerView={isMobile ? 1 : 2} // Show two slides at a time
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {testimonials.map((rating, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center space-x-4 p-7 mb-6" >
              {/* Need to add empty div to make image center */}
              <div></div>
              <div
                className="w-[100px] h-[100px] rounded-full"
                style={{
                  backgroundImage: `url(${baseURL}/file/${rating.clientImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="rating rating-md rating-half flex items-center mb-4 ">
                {Array.from({ length: 5 }, (_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`rating-${rating.id}`}
                    className="mask mask-star-2 bg-orange-400 "
                    checked={i < rating.stars}
                    readOnly
                  />
                ))}
              </div>
              <div className="flex justify-center items-center flex-col">
                <span className="text-sm md:text-[15px] text-[#999999] text-center">
                  {rating.clientReview}
                </span>
                <div className="mt-5 text-center">
                  <h6 className="text-white font-medium text-lg font-bold">
                    {rating.clientName}
                  </h6>
                  <p className="text-sm text-[#999999]">
                    {rating.clientDesignation}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-x-0 bottom-0 flex px-4 py-2">
        <div className="w-full flex justify-center">
          <button
            onClick={goToPreviousSlide}
            className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full md:ml-[35%] ml-[25%] swiper-button-prev"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <span className="text-white">
            <span className="text-success">{currentIndex + 1}</span>/
            {testimonials.length}
          </span>
          <button
            onClick={goToNextSlide}
            className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full md:mr-[35%] mr-[25%] swiper-button-next"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
