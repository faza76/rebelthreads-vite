import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const featuredCardPos = [
    { y: 400, x: 1000 },
    { y: 1500, x: 200 },
    { y: 1250, x: 1750 },
    { y: 1500, x: 1250 },
    { y: 400, x: 1800 },
    { y: 250, x: 800 },
    { y: 1100, x: 1750 },
    { y: 1000, x: 1100 },
    { y: 1200, x: 1650 },
    { y: 500, x: 1900 },
  ];

  const featuredTitles = document.querySelector(".featured-titles");
  const moveDistance = window.innerWidth * 3;

  const imagesContainer = document.querySelector(".featured-images");
  for (let i = 1; i <= 10; i++) {
    const featuredImgCard = document.createElement("div");
    featuredImgCard.className = `featured-img-card featured-img-card-${i}`;

    const img = document.createElement("img");
    img.src = `/images/featured-work/img${i}.jpeg`;
    img.alt = `featured work image ${i}`;
    featuredImgCard.appendChild(img);

    const position = featuredCardPos[i - 1];

    gsap.set(featuredImgCard, {
      x: position.x,
      y: position.y,
    });

    imagesContainer.appendChild(featuredImgCard);
  }

  const featuredImgCards = document.querySelectorAll(".featured-img-card");
  featuredImgCards.forEach((featuredImgCard, index) => {
    gsap.set(featuredImgCard, {
      z: -1500,
      scale: 0,
    });
  });

  ScrollTrigger.create({
    trigger: ".featured-work",
    start: "top top",
    end: `+=${window.innerHeight * 5}px`,
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      const xPosition = -moveDistance * self.progress;
      gsap.set(featuredTitles, {
        x: xPosition,
      });

      featuredImgCards.forEach((featuredImgCard, index) => {
        const staggerOffset = index * 0.075;
        const scaledProgress = (self.progress - staggerOffset) * 3;
        const individualProgress = Math.max(0, Math.min(1, scaledProgress));
        const newZ = -1500 + (1500 + 1500) * individualProgress;
        const scaleProgress = Math.min(1, individualProgress * 10);
        const scale = Math.max(0, Math.min(1, scaleProgress));

        gsap.set(featuredImgCard, {
          z: newZ,
          scale: scale,
        });
      });
    },
  });
});
