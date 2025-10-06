// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import Slide1 from "../../assets/home/slide1.jpg";
import Slide2 from "../../assets/home/slide2.jpg";
import Slide3 from "../../assets/home/slide3.jpg";
import Slide4 from "../../assets/home/slide4.jpg";
import Slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "./../../components/SectionTitle/SectionTitle";

const FoodCategorySlider = () => {
  return (
    <section>
      <SectionTitle heading={"ORDER ONLINE"} subheading={"From 11:00am to 10:00pm"}/>
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-12"
      >
        <SwiperSlide>
          <img src={Slide1} alt="" className="w-full" />
          <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black/30 text-white text-center  p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
            <p className="text-xl text-[#FFFFFF] new_heading_font">SALADS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt="" className="w-full" />
          <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black/30  text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl text-[#FFFFFF] new_heading_font">CAKES</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} alt="" className="w-full" />
          <div className="absolute bottom-0 left-0 inset-0 flex justify-center items-end right-0  bg-black/30  text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl text-[#FFFFFF] new_heading_font">DESSERTS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="" className="w-full" />
          <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black/30  text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl text-[#FFFFFF] new_heading_font">PIZZAS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="" className="w-full" />
          <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black/30  text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl text-[#FFFFFF] new_heading_font">SOUPS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt="" className="w-full" />
          <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black/30  text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl text-[#FFFFFF] new_heading_font">CAKES</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="" className="w-full" />
          <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black/30  text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl text-[#FFFFFF] new_heading_font">PIZZAS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} alt="" className="w-full" />
          <div className="absolute bottom-0 left-0 inset-0 flex justify-center items-end right-0  bg-black/30  text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl text-[#FFFFFF] new_heading_font">DESSERTS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="" className="w-full" />
          <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black/30 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl text-[#FFFFFF] new_heading_font">SOUPS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt="" className="w-full" />
          <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black/30  text-white text-center  p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
            <p className="text-xl text-[#FFFFFF] new_heading_font">SALADS</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FoodCategorySlider;
