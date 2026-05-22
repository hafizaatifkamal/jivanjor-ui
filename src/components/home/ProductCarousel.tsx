"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const productCards = [
  {
    title: "Champion Super",
    description:
      "Provides a superior bond and strength, while being non-hazardous.",
    color: "bg-[#0083CB]",
    badge: "Super Premium",
    image: "/images/Champion Super.png",
  },
  {
    title: "Aquabond",
    description:
      "Heatproof and waterproof adhesive made with Cross Linking Polymer.",
    color: "bg-[#077937]",
    badge: "Waterproof Grade",
    image: "/images/Aquabond.png",
  },
  {
    title: "Foambond",
    description:
      "Great for upholstery, it connects foam, resin, leather, fabrics and metal.",
    color: "bg-[#F57F26]",
    badge: "Speciality",
    image: "/images/Foambond.png",
  },
  {
    title: "Watershield",
    description:
      "Provides excellent water-resistance. Its superior flow makes it smooth and easy to apply.",
    color: "bg-[#007B8A]",
    badge: "Eco Friendly",
    image: "/images/Watershield.png",
  },
];

export default function ProductCarousel() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation]}
        watchOverflow={false}
        loop={false}
        spaceBetween={30}
        slidesPerView={1.5}
        navigation={{
          prevEl: ".product-prev",
          nextEl: ".product-next",
          disabledClass: "swiper-button-disabled",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="overflow-visible!"
      >
        {productCards.map((card) => (
          <SwiperSlide key={card.title} className="overflow-visible! xl w-68!">
            <div className="relative pt-24">
              {/* Floating image */}
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={300}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-60 object-contain z-100"
              />
              {/* Card */}
              <div
                className={`${card.color} rounded-[28px] p-6 flex flex-col justify-end items-center text-white shadow-xl min-h-90 min-w-64`}
              >
                <h3 className="text-2xl font-semibold text-center">
                  {card.title}
                </h3>
                <div className="w-full h-px bg-white my-4" />
                <p className="text-center text-base leading-relaxed max-w-60">
                  {card.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <button className="cursor-pointer product-prev w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center transition-all hover:bg-primary hover:text-white">
          <ArrowLeft size={20} />
        </button>
        <button className="cursor-pointer product-next w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center transition-all hover:bg-primary hover:text-white">
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
