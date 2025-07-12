import React,{useState} from "react";
import {motion} from "framer-motion";
import {useActiv} from "../MainDirections";
import '../mainDirections.css'

type MotionImgProps = {
    srcImg: string;
    directionImg: "left" | "right";
};

export default function MotionImg({ srcImg, directionImg }: MotionImgProps) {
    const { activ, setActiv } = useActiv();
    const [valid, setValid] = useState<boolean>(false)
    setTimeout(()=>{setValid(true)}, 2000);
    const props = valid
        ? {
            onMouseEnter: () => {
                const isActiveNow = directionImg === "left" ? activ : !activ;
                if (!isActiveNow) setActiv(directionImg === "left");
            }
        }
        : {};

    const clipPathValue =
        directionImg === "left"
            ? activ
                ? "inset(0% 0% 0% 0%)"
                : "inset(0% 0% 0% 66%)"
            : !activ
                ? "inset(0% 0% 0% 0%)"
                : "inset(0% 66% 0% 0%)";

    const filterValue =
        directionImg === "left"
            ? !activ
                ? "blur(10px)"
                : "none"
            : !activ
                ? "none"
                : "blur(10px)";

    const zIndexValue =
        (directionImg === "left" && !activ) ||
        (directionImg === "right" && activ)
            ? 2
            : 1;

    return (
        <motion.img
            src={srcImg}
            {...props}
                className={`main-directions__image ${directionImg}`}
            style={{
                zIndex: zIndexValue,
            }}
            animate={{
                clipPath: clipPathValue,
                filter: filterValue,
            }}
            transition={{
                clipPath: { duration: 2, ease: "easeInOut" },
                filter: { duration: 2, ease: "easeOut" },
            }}
        />
    );
}