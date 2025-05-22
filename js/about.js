import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".about-hero-portrait", {
    y: -200,
    rotation: -25,
    scrollTrigger: {
      trigger: ".about-hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to("#tag-1", {
    y: -300,
    rotation: -45,
    scrollTrigger: {
      trigger: ".about-copy",
      start: "top bottom",
      end: "bottom+=100% top",
      scrub: 1,
    },
  });

  gsap.to("#tag-2", {
    y: -150,
    rotation: 70,
    scrollTrigger: {
      trigger: ".about-copy",
      start: "top bottom",
      end: "bottom+=100% top",
      scrub: 1,
    },
  });

  gsap.to("#tag-3", {
    y: -400,
    rotation: 120,
    scrollTrigger: {
      trigger: ".about-copy",
      start: "top bottom",
      end: "bottom+=100% top",
      scrub: 1,
    },
  });

  gsap.to("#tag-4", {
    y: -350,
    rotation: -60,
    scrollTrigger: {
      trigger: ".about-copy",
      start: "top bottom",
      end: "bottom+=100% top",
      scrub: 1,
    },
  });

  gsap.to("#tag-5", {
    y: -200,
    rotation: 100,
    scrollTrigger: {
      trigger: ".about-copy",
      start: "top bottom",
      end: "bottom+=100% top",
      scrub: 1,
    },
  });
});
