import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  revealTransition();

  function revealTransition() {
    return new Promise((resolve) => {
      gsap.set(".transition-overlay", { scaleY: 1, transformOrigin: "top" });

      gsap.to(".transition-overlay", {
        scaleY: 0,
        duration: 0.75,
        stagger: -0.1,
        ease: "power3.inOut",
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
      gsap.set(".transition-overlay", { scaleY: 0, transformOrigin: "bottom" });

      gsap.to(".transition-overlay", {
        scaleY: 1,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.inOut",
        onComplete: resolve,
      });
    });
  }
});
