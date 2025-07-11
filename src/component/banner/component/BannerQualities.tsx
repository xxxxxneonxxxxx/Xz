import React from "react";
import { motion,Easing,Variants } from "framer-motion";

const WaveText = ({ text }: { text: string }) => {
    const letters = text.split("");

    const container: Variants = {
        hidden: { opacity: 6, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                duration: 0.8,
                ease: "circOut",
                staggerChildren: 0.05,
            },
        },
    };
    const bezier: Easing = [0.445, 0.05, 0.55, 0.95];

    const child:Variants = {
        hidden: { y: 0 },
        visible: {
            y: [-10, 10, 0],
            transition: {
                duration: 1,
                ease: bezier,
            },
        },
    };

    return (
        <motion.div
            style={{ display: "flex", fontSize: "2rem" }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((char, index) => (
                <motion.span className={'banner__quality'}
                    key={index}
                    variants={child}
                    style={{ display: "inline-block" }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};


export default function BannerQualities(){
    return (
        <motion.div className="banner__qualities">
            <WaveText text={"Качество."}/>
            <WaveText text={"Надёжность."}/>
            <WaveText text={"Гарантия."}/>
        </motion.div>
    )
}