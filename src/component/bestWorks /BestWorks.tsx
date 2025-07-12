import React,{useState} from "react";
import residentialСomplex from './img/residentialСomplex .png';
import businessСenter from './img/businessСenter .png';
import cottage from './img/cottage.png';
import school from './img/scool.png'
import './bestWorks.css'
import {motion} from "framer-motion";

type BestWorksComponent= {
    name: string;
    firstYear:number;
    lastYear:number;
    countPeople:number;
    description:string;
    url:string;
    id:number;
}

export default function BestWorks() {
    const [bestWorks, setBestWorks] = useState<BestWorksComponent[]>([
        {
            name: 'Загородный коттедж в Сочи',
            firstYear: 2020,
            lastYear: 2024,
            countPeople: 40,
            description: 'Просторный частный дом с панорамными окнами, террасой и современным энергоэффективным дизайном.',
            url: cottage,
            id:1
        },
        {
            name: 'Офисный центр «Норд Парк»',
            firstYear: 2019,
            lastYear: 2022,
            countPeople: 65,
            description: 'Многофункциональный бизнес-комплекс с подземным паркингом, переговорными и дизайнерскими интерьерами.',
            url: businessСenter,
            id:2
        },
        {
            name: 'Жилой комплекс «Зелёный квартал»',
            firstYear: 2021,
            lastYear: 2025,
            countPeople: 80,
            description: 'Современное жильё комфорт-класса с благоустроенной территорией, детскими площадками и зелёными зонами.',
            url: residentialСomplex,
            id:3
        },
        {
            name: 'Школа нового поколения',
            firstYear: 2018,
            lastYear: 2021,
            countPeople: 50,
            description: 'Образовательное учреждение с инновационной архитектурой, актовым залом, спортивным комплексом и STEM-лабораториями.',
            url: school,
            id:4
        }
    ]);

    const [activid, setActivid] = useState<number|null>(null);
    return (
        <section className="best-works">
            <div className={'best-works__allProject'}>Все проекты</div>
            <div className="best-works__content">
                <h1 className="best-works__title">Лучшие проекты</h1>
                {bestWorks.map((bestWork)=>{
                    return (
                        <div className="best-works__item" key={bestWork.id}>
                            <div className="best-works__image-wrapper">
                                <motion.div
                                    onMouseEnter={()=>setActivid(bestWork.id)}
                                    onMouseLeave={()=>setActivid(null)}
                                    className="best-works__image"
                                    animate={{
                                        scale: activid===bestWork.id ? 1.15 : 1,
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <img src={bestWork.url} alt="Объект строительства" />
                                </motion.div>

                                <h2 className="best-works__name">{bestWork.name}</h2>
                                <motion.div
                                    onMouseEnter={()=>setActivid(bestWork.id)}
                                    onMouseLeave={()=>setActivid(null)}
                                    className="best-works__info"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: activid===bestWork.id ? 0 : 150, opacity: 1 }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                    }}

                                >
                                    <label className="best-works__description">{bestWork.description}</label>
                                    <label className="best-works__years">{bestWork.firstYear}-{bestWork.lastYear}</label>
                                    <label className="best-works__team">строило {bestWork.countPeople} человек</label>
                                </motion.div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}