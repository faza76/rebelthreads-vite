import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

document.addEventListener("DOMContentLoaded", () => {
    const isHomePage = document.querySelector(".page.home-page");
    if (!isHomePage) return;

    gsap.registerPlugin(ScrollTrigger, SplitText);

    const manifestoTitle = SplitText.create(".manifesto-title h1", {
        types: ["words", "chars"],
        tagName: "span",
        wordClass: "word",
        charClass: "char",
    });

    gsap.set(manifestoTitle.chars, {
        opacity: 0.25,
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".manifesto",
            start: "top 35%",
            end: "bottom 75%",
            scrub: true,
            markers: false,
        }
    });

    manifestoTitle.chars.forEach((char, index) => {
        tl.to(char, {
            opacity: 1,
            duration: 0.1,
            ease: "none",
        }, index * 0.1);
    });


});