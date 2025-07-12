import React from "react";
import {BannerText} from "../Banner";
import { motion,useAnimation } from "framer-motion";

interface Props {
    text: BannerText;
}

export default function BannerFeatureText({ text }: Props) {

    const bannerFeatureAccent=useAnimation()

    return (
        <motion.div className="banner__feature-text"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: [50, -10, 0], opacity: 1 }}
                    transition={{
                        duration: 1.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    onAnimationComplete={() => {
                        bannerFeatureAccent.start({
                            fontSize: ["24px", "32px", "24px"],
                            transition: {
                                duration: 5,
                                ease: "linear",
                                repeat: Infinity,
                            },
                        });
                    }}

        >
            {text.textStart && <span>{text.textStart}</span> }

            <motion.span className="banner__feature-accent"
                         initial={{ scale: 1 }}
                         style={{fontSize:"24px"}}
                         animate={bannerFeatureAccent}
            >
                {text.textNumber}
            </motion.span>

            <span>{text.textEnd}</span>
        </motion.div>
    );
}