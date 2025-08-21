import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  gsap.registerPlugin(ScrollTrigger);

  const heroImg = document.querySelector(".hero-img img");
  const heroHeader1 = document.querySelector(".hero-header .hero-header-1 h1");
  const heroHeader2 = document.querySelector(".hero-header-2 h1");

  const servicesHeaderText = document.querySelectorAll(".services-header-text");
  const servicesHeaderBg = document.querySelectorAll(".services-header-bg");


  let currentImageIndex = 1;
  const totalImages = 10;
  let scrollTriggerInstance = null;
  let headerBgScrollTriggerInstance = null;

  // setInterval(() => {
  //   currentImageIndex =
  //     currentImageIndex >= totalImages ? 1 : currentImageIndex + 1;
  //   heroImg.src = `/images/work-items/work-item-${currentImageIndex}.jpg`;
  // }, 250);

  const initAnimations = () => {
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill();
    }


    scrollTriggerInstance = ScrollTrigger.create({
      trigger: ".hero-img-holder",
      start: "top bottom",
      end: "top top",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(".hero-img", {
          y: `${-110 + 110 * progress}%`,
          scale: 0.25 + 0.75 * progress,
          rotation: -15 + 15 * progress,
        });

        gsap.set(".hero-header-1", {
          x: `${ 100 * progress}%`,
        });

        gsap.set(".hero-header-2", {
          x: `${-100 * progress}%`,
        });

      },
    });


    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-header-bg",
        start: "top bottom",
        end: "top top",
        scrub: false,
        markers: false,
      }
    });

    tl.to(servicesHeaderBg, {
      scaleX: 1,
      duration: 0.5,
      ease: "power2.inOut",
    },0)

    tl.to(servicesHeaderText, {
      opacity: 1,
      ease: 'steps(1)',
    },0.2)

    tl.to(servicesHeaderBg, {
      scaleX: 0,
      transformOrigin: "right",
      duration: 0.5,
      ease: "power2.inOut",
    },0.5)


  };

  initAnimations();

  window.addEventListener("resize", () => {
    initAnimations();
  });
});
