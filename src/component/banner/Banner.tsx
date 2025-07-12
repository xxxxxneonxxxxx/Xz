import React,{useState} from 'react';
import checkMark from './checkMark.svg';


import './banner.css'
import BannerHeroH1 from "./component/BannerHeroH1";
import {WaveText} from "./animahion/WaveText";
import BannerFeatureText from "./component/BannerFeatureText";
import {motion} from "framer-motion";

export type BannerText={
    textStart: string;
    textNumber:string;
    textEnd: string;
}

export default function Banner() {
    const [bannerText] = useState<BannerText[]>([
        { textStart: 'Проекты от ', textNumber: '10 000 ₽ ', textEnd: 'за м²' },
        { textStart: 'Скидка до ', textNumber: '17% ', textEnd: 'на первый заказ' },
        { textStart: '', textNumber: '30%', textEnd: 'экономия на материалах' }
    ]);

    return (
        <div className="banner">
            <div className="banner__content">

                <header className="banner__header">
                    <h1 className="banner__logo">LOREM</h1>
                </header>
                <div className="banner__hero">
                    <BannerHeroH1 />
                    <motion.div className="banner__qualities">
                        <WaveText text={"Качество."}/>
                        <WaveText text={"Надёжность."}/>
                        <WaveText text={"Гарантия."}/>
                    </motion.div>
                </div>

                <ul className="banner__features">
                    <li className="banner__feature">
                        <img src={checkMark} alt="Check" className="banner__feature-icon"/>
                        <BannerFeatureText text={bannerText[0]}/>
                    </li>
                    <li className="banner__feature">
                        <img src={checkMark} alt="Check" className="banner__feature-icon"/>
                        <BannerFeatureText text={bannerText[1]}/>

                    </li>
                    <li className="banner__feature">
                        <img src={checkMark} alt="Check" className="banner__feature-icon"/>
                        <BannerFeatureText text={bannerText[2]}/>

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

