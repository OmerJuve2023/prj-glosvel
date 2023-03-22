import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Poster4 from "../../assets/posters/poster_4.jpg";
import Poster1 from "../../assets/posters/poster_1.jpg";
import Poster5 from "../../assets/posters/poster_5.jpg";
import Poster3 from "../../assets/posters/poster_3.jpg";
import Poster6 from "../../assets/posters/poster_6.jpg";
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
                    src={Poster1}
                    alt="slide 1"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={Poster3}
                    alt="slide 2"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={Poster4}
                    alt="slide 3"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={Poster5}
                    alt="slide 3"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={Poster6}
                    alt="slide 3"
                />
            </SwiperSlide>

        </Swiper>
    );
}
export default MainSlider;