import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  revealTransition().then(() => {
    gsap.set(".block", { visibility: "hidden" });
  });

  function revealTransition() {
    return new Promise((resolve) => {
      gsap.set(".block", { scaleY: 1 });
      gsap.to(".block", {
        scaleY: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.inOut",
        onComplete: resolve,
      });
    });
  }

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href === window.location.pathname
      ) {
        return;
      }

      event.preventDefault();

      animateTransition().then(() => {
        window.location.href = href;
      });
    });
  });

  function animateTransition() {
    return new Promise((resolve) => {
      gsap.set(".block", { visibility: "visible", scaleY: 0 });
      gsap.to(".block", {
        scaleY: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.inOut",
        onComplete: resolve,
      });
    });
  }
});
