import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  const isWorkPage = document.querySelector(".page.work-page");
  if (!isWorkPage) return;

  gsap.registerPlugin(ScrollTrigger);

  let scrollTriggerInstances = [];

  const initAnimations = () => {
    if (window.innerWidth <= 1000) {
      scrollTriggerInstances.forEach((instance) => {
        if (instance) instance.kill();
      });
      scrollTriggerInstances = [];
      return;
    }

    scrollTriggerInstances.forEach((instance) => {
      if (instance) instance.kill();
    });
    scrollTriggerInstances = [];

    gsap.set(".work-item", {
      opacity: 0,
      scale: 0.75,
    });

    document.querySelectorAll(".work-items .row").forEach((row, index) => {
      const workItems = row.querySelectorAll(".work-item");

      workItems.forEach((item, itemIndex) => {
        const fromLeft = itemIndex % 2 === 0;

        gsap.set(item, {
          x: fromLeft ? -1000 : 1000,
          rotation: fromLeft ? -50 : 50,
          transformOrigin: "center center",
        });
      });

      const trigger = ScrollTrigger.create({
        trigger: row,
        start: "top 75%",
        onEnter: () => {
          gsap.timeline().to(workItems, {
            duration: 1,
            x: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            ease: "power4.out",
          });
        },
      });
      scrollTriggerInstances.push(trigger);
    });

    ScrollTrigger.refresh();
  };

  initAnimations();

  window.addEventListener("resize", () => {
    initAnimations();
  });
});
