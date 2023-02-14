import * as React from "react";
import logo from './assets/logo.webp'
import NavigationPanel from "./components/NavigationPanel/NavigationPanel";
import S from "./root.module.css"
import {SimpleSlider} from "./components/slickSlider/SimpleSlider";
import {useState} from "react";
import {MobileMenu} from "./components/MobileMenu/MobileMenu";
import { Turn as Hamburger } from 'hamburger-react'

export default function Root() {
    const [menuView, setMenuView] = useState(false);
    const [isOpen, setOpen] = useState(false)

   const onMenuBarsHandler = () => {
       setMenuView(!menuView);
       setOpen(!isOpen);
   }

    return (

        <div className={S.root}>
            <section className={S.header}>
                <picture>
                    <img className={S.headerImg} src={logo} alt='ApexLogo'/>
                </picture>
                <div className={S.menuNav}> <NavigationPanel/></div>
                <div className={S.menuBars}>
                    <Hamburger toggled={isOpen} toggle={onMenuBarsHandler} size={40} direction="right" color="#d70329"/>
                </div>
            </section>
            {menuView ? <MobileMenu/> : <SimpleSlider/> }
        </div>)


}
