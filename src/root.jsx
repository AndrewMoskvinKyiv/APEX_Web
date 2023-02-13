import * as React from "react";
import logo from './assets/logo.png'
import NavigationPanel from "./components/NavigationPanel/NavigationPanel";
import S from "./root.module.css"
import {SimpleSlider} from "./components/slickSlider/SimpleSlider";
import Slider from "react-slick";

export default function Root() {


    return (
        <div className={S.root}>
            <video autoPlay muted loop className={S.myVideo}>
                        <source src="https://apextest12.b-cdn.net/vid1.mp4" type="video/mp4"/>
                    </video>
    {/*    <Slider {...settings}>*/}

    {/*    <div>*/}
    {/*        <video autoPlay muted loop className={S.myVideo}*/}
    {/*               style={{width:`${windowOuterWidth}px`}}>*/}
    {/*            <source src="https://apextest12.b-cdn.net/vid1.mp4" type="video/mp4"/>*/}
    {/*        </video>*/}
    {/*    </div>*/}
    {/*    <div>*/}
    {/*        <video autoPlay muted loop className={S.myVideo}*/}
    {/*               style={{width:`${windowOuterWidth}px`}}>*/}
    {/*            <source src="https://apextest12.b-cdn.net/vid2.mp4" type="video/mp4"/>*/}
    {/*        </video>*/}
    {/*    </div>*/}
    {/*    <div>*/}
    {/*        <video autoPlay muted loop className={S.myVideo}*/}
    {/*               style={{width:`${windowOuterWidth}px`}}>*/}
    {/*            <source src="https://apextest12.b-cdn.net/vid3.mp4" type="video/mp4"/>*/}
    {/*        </video>*/}
    {/*    </div>*/}
    {/*</Slider>)*/}
    {/*<section className={S.header}>*/
    }
    {/*    <picture>*/
    }
    {/*        <img src={logo} alt='ApexLogo'/>*/
    }
    {/*    </picture>*/
    }
    {/*<NavigationPanel/>*/
    }
    {/*</section>*/
    }
    {/*<video autoPlay muted loop className={S.myVideo} >*/
    }
    {/*    <source src="https://apextest12.b-cdn.net/vid1.mp4" type="video/mp4"/>*/
    }
    {/*</video>*/
    }
    {/*<SimpleSlider/>*/
    }
    </div>)


}
