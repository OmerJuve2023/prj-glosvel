import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Poster1 from "../../assets/posters/poster_1.jpg";
import Poster2 from "../../assets/posters/poster-2.jpg";
import Poster3 from "../../assets/posters/poster-3.jpg";
import {Autoplay, Pagination, Navigation} from "swiper";

const MainSlider = () => {

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper-container"
        >
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96 swiper-slide"
                    src={Poster1}
                    alt="slide 1"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96 swiper-slide"
                    src={Poster2}
                    alt="slide 2"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96 swiper-slide"
                    src={Poster3}
                    alt="slide 3"
                />
            </SwiperSlide>
        </Swiper>
    );
}
export default MainSlider;