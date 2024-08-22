import "./Slider.scss";
import { MoviesT } from "@src/app/config/types";
import { Navigation } from "swiper/modules";

import Card from "../Card";
import { SwiperSlide, Swiper } from "swiper/react";

interface SliderI {
   sequelsPrequels: MoviesT[];
}

const Slider = ({ sequelsPrequels }: SliderI) => {
   return (
      <div className={"swiper__container"}>
         <Swiper
            slidesPerView={2}
            spaceBetween={50}
            className={"swiper"}
            modules={[Navigation]}
            navigation
         >
            {sequelsPrequels &&
               sequelsPrequels.map((sequelsPrequel) => (
                  <SwiperSlide
                     key={sequelsPrequel.id}
                     className={"swiper__slide"}
                  >
                     <Card movie={sequelsPrequel} />
                  </SwiperSlide>
               ))}
         </Swiper>
      </div>
   );
};
export default Slider;
