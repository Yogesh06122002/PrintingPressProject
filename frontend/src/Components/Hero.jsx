import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import tags from "/src/assets/HeroSecImages/Tags.jpg"
import label from "/src/assets/HeroSecImages/label.jpg"
import printer from "/src/assets/HeroSecImages/printer.jpg"

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
      className="w-full h-[70vh] sm:h-[80vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="text-center bg-black/50 p-4 sm:p-6 rounded-lg max-w-[90%] sm:max-w-xl">
              <h2 className="text-2xl sm:text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-sm sm:text-lg">{slide.desc}</p>
              <button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-green-600 hover:bg-green-700 rounded text-white font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
