import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const services = gsap.utils.toArray(".service-card");

  ScrollTrigger.create({
    trigger: services[0],
    start: "top 50%",
    endTrigger: services[services.length - 1],
    end: "top 150%",
  });

  services.forEach((service, index) => {
    const isLastServiceCard = index === services.length - 1;
    const serviceCardInner = service.querySelector(".service-card-inner");

    if (!isLastServiceCard) {
      ScrollTrigger.create({
        trigger: service,
        start: "top 45%",
        endTrigger: ".contact-cta",
        end: "top 90%",
        pin: true,
        pinSpacing: false,
      });

      gsap.to(serviceCardInner, {
        y: `-${(services.length - index) * 14}vh`,
        ease: "none",
        scrollTrigger: {
          trigger: service,
          start: "top 45%",
          endTrigger: ".contact-cta",
          end: "top 90%",
          scrub: true,
        },
      });
    }
  });
});
