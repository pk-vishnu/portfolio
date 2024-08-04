"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

export default function Blogs() {
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
                <div className="relative w-full h-80 group">
                  <a
                    href="https://medium.com/@IamVPK/the-profound-philosophy-of-minecrafts-end-poem-1e2f3d23dac5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jL5FZ6kdtIUJM6K6.jpg"
                      alt="Blog 1"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <span className="text-lg font-bold">
                        The Profound Philosophy of Minecraft&apos;s End Poem
                      </span>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-80 group">
                  <a
                    href="https://medium.com/@IEEE_Computer_Society_VIT/metaverse-infrastructure-building-the-foundation-for-the-next-era-of-virtual-reality-f7e65972c2dc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*IKJ8XZefibkxiKYV"
                      alt="Blog 2"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <span className="text-lg font-bold">
                        Metaverse Infrastructure: Building the Foundation for
                        the Next Era of Virtual Reality
                      </span>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white">
              Writing as a Hobby
            </h2>
            <p className="text-gray-300 text-lg mt-4">
              Occasionally, I find myself diving into the world of writing.
              Though it&apos;s a rare pursuit, it&apos;s become a fascinating
              hobby where I explore various topics and share my thoughts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
