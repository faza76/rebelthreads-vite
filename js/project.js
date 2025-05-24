import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  const isProjectPage = document.querySelector(".page.project-page");
  if (!isProjectPage) return;

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".project-page-whitespace",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => {
      const projectPreviewWrapper = document.querySelector(
        ".project-preview-wrapper"
      );
      const previewCols = document.querySelectorAll(
        ".preview-col:not(.main-preview-col)"
      );
      const mainPreviewImg = document.querySelector(
        ".preview-img.main-preview-img img"
      );

      const previewScreenWidth = window.innerWidth;
      const previewMaxScale = previewScreenWidth < 900 ? 4 : 2.65;

      const scale = 1 + self.progress * previewMaxScale;
      const yPreviewColTranslate = self.progress * 300;
      const mainPreviewImgScale = 2 - self.progress * 0.85;

      projectPreviewWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;

      previewCols.forEach((previewCol) => {
        previewCol.style.transform = `translateY(${yPreviewColTranslate}px)`;
      });

      mainPreviewImg.style.transform = `scale(${mainPreviewImgScale})`;
    },
  });
});
