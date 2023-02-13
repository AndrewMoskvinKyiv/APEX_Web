import * as React from "react";
import logo from './assets/logo.png'
import NavigationPanel from "./components/NavigationPanel/NavigationPanel";
import S from "./root.module.css"
import {SimpleSlider} from "./components/slickSlider/SimpleSlider";
import Slider from "react-slick";



export default function Root() {
    return (
        <div className={S.root}>
            <section className={S.header}>
                <picture>
                    <img src={logo} alt='ApexLogo'/>
                </picture>
                <NavigationPanel/>
            </section>
            <SimpleSlider/>

        </div>)


}
