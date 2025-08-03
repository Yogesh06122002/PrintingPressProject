import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import label_tag from "/src/assets/HeroSecImages/label_tag.jpg";
import label from "/src/assets/HeroSecImages/label.jpg";
import tapes from "/src/assets/HeroSecImages/tapes.jpg";

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
  );
}
