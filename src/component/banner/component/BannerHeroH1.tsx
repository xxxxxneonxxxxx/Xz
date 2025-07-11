import React from "react";
import { motion } from "framer-motion";

export default function BannerHeroH1() {
    return (
        <div className="banner__hero">
            <h1 className="banner__title">
                <span
                    style={{
                        WebkitTextStroke: "0.5px white",
                        color: "transparent",
                        position: "absolute",
                        width: "100%",
                        fontWeight: 400,
                        fontSize: "80px",
                        lineHeight: "120%",
                    }}
                >
          Строим дома мечты
          <br />
          по доступной цене
        </span>
                <motion.span
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    transition={{ duration: 2, ease: "linear" }}
                    style={{
                        position: "relative",
                        fontWeight: 400,
                        fontSize: "80px",
                        lineHeight: "120%",
                        color: "#FFFFFF",
                        WebkitTextStroke: "0px",
                        display: "inline-block",
                    }}
                >
                    Строим дома мечты
                    <br />
                    по доступной цене
                </motion.span>
            </h1>
        </div>
    );
}