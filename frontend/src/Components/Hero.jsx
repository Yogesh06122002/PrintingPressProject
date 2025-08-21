import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import label_tag from "/src/assets/HeroSecImages/label_tag.png";
import label from "/src/assets/HeroSecImages/label.jpg";
import tapes from "/src/assets/HeroSecImages/tapes.jpeg";

export default function HeroSlider() {
  const slides = [
    {
      image: label_tag,
      title: "Offset Printing",
      desc: "High-quality commercial prints",
    },
    {
      image: label,
      title: "Label Design",
      desc: "Make your brand stand out",
    },
    {
      image: tapes,
      title: "Inner Board Mastery",
      desc: "Sturdy and stylish solutions",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000 }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full lg:h-[90vh] h-[50vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 36px;
          height: 36px;
          border-radius: 9999px; /* fully rounded */
          background: rgba(0, 0, 0, 0.6); /* semi-black background */
          backdrop-filter: blur(6px); /* blur effect */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 16px !important; /* smaller arrow */
          color: white !important; /* white arrow */
          font-weight: bold;
        }

        /* Optional hover effect */
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(0, 0, 0, 0.8);
        }

        /* Custom pagination bullet color */
        .swiper-pagination-bullet {
          background: #00a183 !important; /* normal state */
          opacity: 0.6;
        }

        .swiper-pagination-bullet-active {
          background: #00a183 !important; /* active state */
          opacity: 1;
        }
      `}</style>
      <h1 className="text-center uppercase font-medium text-2xl md:text-3xl mt-5">
        Cotton Printed Label & Woven Label Manufacturer At India
      </h1>
    </>
  );
}
