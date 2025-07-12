import React from "react";
import { motion,Easing,Variants } from "framer-motion";

export const WaveText = ({ text }: { text: string }) => {
    const letters = text.split("");

    const container: Variants = {
        hidden: { opacity: 3, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                duration: 1,
                ease: "circOut",
                staggerChildren: 0.05,
            },
        },
    };
    const bezier: Easing = "easeInOut"

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
            style={{ display: "flex",overflow: "hidden"}}
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
