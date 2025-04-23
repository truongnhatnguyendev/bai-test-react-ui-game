import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, EffectFade, Pagination } from "swiper/modules";

import { IoAlertCircleOutline } from "react-icons/io5";

interface BannerItem {
  id: number;
  title: string;
  subtitle?: string;
  buttonText: string;
  imageUrl: string;
  tag?: string;
  onClick?: () => void;
}

interface SliderBannerProps {
  banners: BannerItem[];
}

export const SliderBanner: React.FC<SliderBannerProps> = ({ banners }) => {
  return (
    <section>
      <div className="hidden md:block">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay
          loop={true}
          slidesPerView={1.5}
          breakpoints={{
            1024: {
              initialSlide: 2,
              width: 1198,
            },
          }}
          spaceBetween={750}
          coverflowEffect={{
            rotate: -1,
            stretch: 0,
            depth: 100,
            modifier: 0.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          navigation={{ nextEl: ".cs-right_arrow", prevEl: ".cs-left_arrow" }}
          pagination
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                className="
                   bg-gradient-to-r 
                  from-teal-700
                   z-10
                 to-teal-900
                 text-white 
                   rounded-2xl 
                   h-[423px] 
                   flex 
                   p-6  
                   flex-row 
                   relative
                   items-center 
                   justify-between 
                   w-[1198px] 
                   max-w-[1198px] 
                   overflow-hidden"
              >
                <div className="absolute top-2 right-3 text-2xl">
                  <IoAlertCircleOutline />
                </div>
                <div className="flex-1 flex flex-col items-center bottom-5 z-10 justify-center mb-0">
                  <div className="bg-white/10 text-xl font-medium leading-[30px] w-[236px] px-3 py-1 rounded-full inline-block mb-4 text-center justify-center align-middle">
                    {banner.tag}
                  </div>
                  <h2 className="text-[42px] font-extrabold w-[420px] leading-[58.8px] text-center mb-4">
                    {banner.title}
                  </h2>
                  {banner.subtitle && (
                    <div className="text-lg font-serif text-[42px] mb-4 align-middle text-center">
                      {banner.subtitle}
                    </div>
                  )}
                  <button
                    onClick={banner.onClick}
                    className="bg-pink-600 h-[50px] flex items-center justify-center w-[340px] hover:bg-pink-700  px-5 py-2 rounded-lg transition"
                  >
                    <span className="text-white text-xl font-[600px] tracking-[1.26px] leading-5">
                      {banner.buttonText}
                    </span>
                  </button>
                </div>
                <div className="w-[585px] h-[485px]">
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden block">
        <Swiper
          className="!overflow-visible"
          spaceBetween={30}
          effect={"fade"}
          loop
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                className="
                  bg-gradient-to-b
                from-teal-700
                  z-10
                 to-teal-900
                 text-white 
                  rounded-2xl 
                  p-4
                  h-[390px] 
                  flex 
                  flex-col-reverse 
                  w-full
                  relative
                  items-center 
            "
              >
                <div className="absolute top-2 right-3 text-2xl">
                  <IoAlertCircleOutline />
                </div>
                <div className="flex-1 flex flex-col items-center absolute h-[216px] justify-center">
                  <div className="bg-white/10 text-xs px-3 py-1 rounded-full inline-block mb-4">
                    {banner.tag}
                  </div>
                  <h2 className="text-xl font-extrabold w-[250px] text-center leading-8 mb-4">
                    {banner.title}
                  </h2>
                  {banner.subtitle && (
                    <div className="text-lg font-bold text-[42px] mb-4 align-middle leading-[58.8px] text-center sm:text-left">
                      {banner.subtitle}
                    </div>
                  )}
                  <button
                    onClick={banner.onClick}
                    className="bg-pink-600 h-[50px] w-[250px]  sm:w-[340px] hover:bg-pink-500 text-white text-sm font-bold px-5 py-2 rounded-lg transition"
                  >
                    {banner.buttonText}
                  </button>
                </div>
                <div className="w-[350px] h-[238px] absolute -top-18">
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
