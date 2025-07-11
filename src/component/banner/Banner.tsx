import React from 'react';
import checkMark from './checkMark.svg';


import './banner.css'
import BannerHeroH1 from "./component/BannerHeroH1";
import BannerQualities from "./component/BannerQualities";
export default function Banner() {
    return (
        <div className="banner">
            <div className="banner__content">

                <header className="banner__header">
                    <h1 className="banner__logo">LOREM</h1>
                </header>
                <div className="banner__hero">
                    <BannerHeroH1 />
                    <BannerQualities/>
                </div>

                <ul className="banner__features">
                    <li className="banner__feature">
                        <img src={checkMark} alt="Check" className="banner__feature-icon"/>
                        <div className="banner__feature-text">
                            <span>Проекты от </span>
                            <span className="banner__feature-accent">10 000 ₽ </span>
                            <span>за м²</span>
                        </div>
                    </li>
                    <li className="banner__feature">
                        <img src={checkMark} alt="Check" className="banner__feature-icon"/>
                        <div className="banner__feature-text">
                            <span>Скидка до </span>
                            <span className="banner__feature-accent">17% </span>
                            <span>на первый заказ</span>
                        </div>
                    </li>
                    <li className="banner__feature">
                        <img src={checkMark} alt="Check" className="banner__feature-icon"/>
                        <div className="banner__feature-text">
                            <span className="banner__feature-accent">30%</span>
                            <span>экономия на материалах</span>
                        </div>
                    </li>
                </ul>

                <button className="banner__cta">ОСТАВИТЬ ЗАЯВКУ</button>
            </div>

            <img
                src={'http://localhost:63342/testovoe/testovoe1/mainImg1.jpg'}
                className="banner__image"
            />
        </div>
    )
}