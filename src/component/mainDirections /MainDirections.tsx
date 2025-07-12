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
type Direction = {
    id: 'left' | 'right';
    title: string;
    text: string;
    showTitleWhen: boolean;
    showTextWhen: boolean;
};

export const useActiv = create<Activ>((set) => ({
    activ: false,
    setActiv: (val) => set({ activ: val }),
}));

export default function MainDirections() {
    const { activ, setActiv } = useActiv();
    const directions: Direction[] = [
        {
            id: 'right',
            title: 'Ремонтно-отделочные работы',
            text: 'Практичные решения для тех, кто ценит качество и комфорт без переплат — оптимальный баланс цены, стиля и надёжного исполнения',
            showTitleWhen: true,
            showTextWhen: false,
        },
        {
            id: 'left',
            title: 'Архитектурные проекты',
            text: 'Проекты частных и коммерческих зданий, которым важно подчеркнуть стиль, продуманную функциональность и гармонию с окружающей средой',
            showTitleWhen: false,
            showTextWhen: true,
        },
    ];
    return (
        <section className="main-directions">
            <div className="main-directions__stack">
                <h1 className="main-directions__title">Главные направления</h1>
                <MotionImg srcImg={otdelka} directionImg="right" />
                <MotionImg srcImg={dom} directionImg="left" />
                <div className="main-directions__container">
                    {directions.map((item) => (
                        <div key={item.id} className={`main-directions__text ${item.id}`}>
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: item.showTitleWhen === activ ? 80 : 0, opacity: 1 }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeInOut",
                                }}
                            >
                                {item.title}
                            </motion.h2>
                            <motion.h3
                                className={item.id === 'left' ? 'main-directions__text__left' : ''}
                                initial={{ y: 20, opacity: 0 }}
                                animate={
                                    item.showTextWhen === activ
                                        ? { y: 0, opacity: 1 }
                                        : { y: 50, opacity: 0 }
                                }
                                transition={{
                                    duration: 1.2,
                                    ease: "easeInOut",
                                }}
                            >
                                {item.text}
                            </motion.h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}