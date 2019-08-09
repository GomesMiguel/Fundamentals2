import { animatedScrollTo } from "./es6-scroll-to.js";

const ctaEvent = () => {
  console.log("Hello :D");
};

(() => {
  console.log(document.getElementById("btn-contact"));
  document.getElementById("btn-contact").onclick = ctaEvent;
})();

animatedScrollTo(500);
