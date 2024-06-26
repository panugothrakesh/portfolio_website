import { delay } from "framer-motion"

export const menuSlide = {
    initial:{
        x: "calc(100% + 50px)"
    },
    enter:{
        x: "0%",
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },
    exit:{
        x:"calc(100% + 50px)",
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    }
}

export const slide = {
    initial:{
        x: "80px"
    },
    enter:(i)=>({
        x: "0px",
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1],delay: i * .05}
    }),
    exit:(i)=>({
        x:"80px",
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1],delay: i * .05}
    })
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}