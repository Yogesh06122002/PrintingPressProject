import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import tags from "/src/assets/HeroSecImages/Tags.jpg";
import label from "/src/assets/HeroSecImages/label.jpg";
import printer from "/src/assets/HeroSecImages/printer.jpg";

export default function HeroSlider() {
  const slides = [
    {
      image: tags,
      title: "Offset Printing",
      desc: "High-quality commercial prints",
    },
    {
      image: label,
      title: "Label Design",
      desc: "Make your brand stand out",
    },
    {
      image: printer,
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
      className="w-full lg:h-[86vh] h-[50vh]"
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
