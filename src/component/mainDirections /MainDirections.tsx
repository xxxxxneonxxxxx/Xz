import React, {useEffect, useState} from "react";
import dom from './img/Dom.png';
import otdelka from './img/отделка.png'
import MotionImg from "./animahion/motionImg";
import './mainDirections.css';
import { motion } from "framer-motion";
import { create } from "zustand";


type Activ = {
    activ: boolean;
    setActiv: (val: boolean) => void;
};

export const useActiv = create<Activ>((set) => ({
    activ: false,
    setActiv: (val) => set({ activ: val }),
}));

export default function MainDirections() {
    const { activ, setActiv } = useActiv();
    return (
        <section className="main-directions">
            <div className="main-directions__stack">
                <h1 className="main-directions__title">Главные направления</h1>
                <MotionImg srcImg={otdelka} directionImg="right" />
                <MotionImg srcImg={dom} directionImg="left" />
                <div className="main-directions__text right"
                >
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: activ ? 80 : 0, opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >Ремонтно-отделочные работы</motion.h2>
                    <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={!activ ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        Практичные решения для тех, кто ценит качество и комфорт без переплат — оптимальный баланс цены, стиля и надёжного исполнения
                    </motion.h3>                </div>
                <div className="main-directions__text left">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: !activ ? 80 : 0, opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >Архитектурные проекты</motion.h2>
                    <motion.h3 className={"main-directions__text__left"}
                        initial={{ y: 20, opacity: 0 }}
                        animate={activ ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        Проекты частных и коммерческих зданий, которым важно подчеркнуть стиль, продуманную функциональность и гармонию с окружающей средой
                    </motion.h3>
                </div>
            </div>
        </section>
    );
}