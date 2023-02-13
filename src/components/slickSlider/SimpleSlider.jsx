import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import S from "./SimpleSlider.module.css"

export const SimpleSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:5000,
        beforeChange: (oldIndex, newIndex) => {
            console.log(newIndex);
            console.log(oldIndex);
        },

    };
    const windowOuterWidth = window.outerWidth
    const windowInnerHeight = window.innerHeight
    console.log(windowInnerHeight)
    return(
        <div>
        <Slider {...settings}>
                <div>
                    <video autoPlay muted loop className={S.myVideo}
                           style={{height:`${windowInnerHeight}px`}}>
                        <source src="https://apextest12.b-cdn.net/vid1.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div>
                    <video autoPlay muted loop className={S.myVideo} >
                        <source src="https://apextest12.b-cdn.net/vid2.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div>
                    <video autoPlay muted loop className={S.myVideo} >
                        <source src="https://apextest12.b-cdn.net/vid3.mp4" type="video/mp4"/>
                    </video>
                </div>
            </Slider>
    </div>
    )
}
