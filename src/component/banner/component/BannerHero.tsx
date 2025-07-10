import React from "react";
import { motion } from "framer-motion";

export default function BannerHero() {
    return (
        <div className="banner__hero">
            <h1
                className="banner__title"
                style={{ position: "relative", display: "inline-block", overflow: "hidden" }}
            >
                {/* Обводка */}
                <span
                    style={{
                        WebkitTextStroke: "0.5px white",
                        color: "transparent",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        fontFamily: "'Prata', serif",
                        fontWeight: 400,
                        fontSize: "80px",
                        lineHeight: "120%",
                        userSelect: "none",
                        pointerEvents: "none",
                        whiteSpace: "pre-line",
                        zIndex: 2,
                    }}
                >
          Строим дома мечты
          <br />
          по доступной цене
        </span>

                {/* Заполняющийся текст с маской */}
                <motion.span
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    transition={{ duration: 6, ease: "linear" }}
                    style={{
                        position: "relative",
                        fontFamily: "'Prata', serif",
                        fontWeight: 400,
                        fontSize: "80px",
                        lineHeight: "120%",
                        color: "#FFFFFF",
                        WebkitTextStroke: "0px",
                        whiteSpace: "pre-line",
                        zIndex: 1,
                        display: "inline-block",
                    }}
                >
                    Строим дома мечты
                    <br />
                    по доступной цене
                </motion.span>
            </h1>
            <div className="banner__qualities">
                <h2 className="banner__quality">Качество.</h2>
                <h2 className="banner__quality">Надёжность.</h2>
                <h2 className="banner__quality">Гарантия.</h2>
            </div>
        </div>
    );
}