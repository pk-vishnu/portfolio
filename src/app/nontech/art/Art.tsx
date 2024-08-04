"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

export default function Art() {
  return (
    <div className="flex justify-center py-8">
      <div className="bg-gray-900 bg-opacity-25 relative border border-black/[0.1] max-w-6xl w-full h-auto rounded-xl p-8 shadow-lg font-poppins">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              modules={[Navigation, Pagination]}
              className="w-full max-w-2xl"
            >
              <SwiperSlide>
                <div className="relative w-full h-80">
                  <img
                    src="img4.png"
                    alt="Digital Art 1"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center w-full h-80">
                  <img
                    src="img2.jpeg"
                    alt="Digital Art 2"
                    className="object-contain h-full rounded-xl"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center w-full h-80">
                  <img
                    src="img1.jpeg"
                    alt="Digital Art 3"
                    className="object-contain h-full rounded-xl"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center w-full h-80">
                  <img
                    src="img3.png"
                    alt="Digital Art 3"
                    className="object-contain h-full rounded-xl"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center w-full h-80">
                  <img
                    src="Beach.png"
                    alt="Digital Art 3"
                    className="object-contain h-full rounded-xl"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white">
              Digital Illustration
            </h2>
            <p className="text-gray-300 text-lg mt-4">
              Over the past year, I&apos;ve delved into the world of digital
              art, mastering tools like Krita and exploring color theory. This
              journey has been an exciting blend of creativity and technical
              skill, allowing me to express my artistic vision in new and
              innovative ways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
