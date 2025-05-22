import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".work-item", {
    opacity: 0,
    scale: 0.75,
  });

  document.querySelectorAll(".work-items .row").forEach((row, index) => {
    const workItems = row.querySelectorAll(".work-item");

    workItems.forEach((item, itemIndex) => {
      const fromLeft = itemIndex % 2 === 0;

      gsap.set(item, {
        x: fromLeft ? -750 : 750,
        rotation: fromLeft ? -25 : 25,
        transformOrigin: "center center",
      });
    });

    ScrollTrigger.create({
      trigger: row,
      start: "top 75%",
      onEnter: () => {
        gsap.timeline().to(workItems, {
          duration: 0.75,
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          ease: "power4.out",
        });
      },
    });
  });

  ScrollTrigger.refresh();
});
