import { animatedScrollTo } from "./es6-scroll-to.js";

class StateCta {
  constructor(number) {
    this.state = (() => {
      let newObj = {};
      for (let i = 0; i < number; i++) {
        newObj[`textBox${i}`] = false;
      }

      return { ...newObj };
    })();
  }

  stateLength = () => Object.keys(this.state).length;

  isOpen = () =>
    !Object.values(this.state).reduce((total, current) => total + current);

  toggleCta = textBox => {
    if (this.isOpen() || this.state[textBox]) {
      this.state = { ...this.state, [`${textBox}`]: !this.state[`${textBox}`] };
      document.getElementById(textBox).classList.toggle("hidden");

      return this.state;
    }
    console.log("close other tooltip first");
    console.log(this.state);
  };

  bindBtn = () => {
    console.log(this.stateLength());
    for (let i = 0; i < this.stateLength(); i++) {
      document.getElementById(`btn${i ? i : ""}`).onclick = () => {
        this.toggleCta(`textBox${i ? i : ""}`);
      };
    }
  };
}

const state = new StateCta(2);

(() => {
  console.log(state.isOpen());

  state.bindBtn();
})();

animatedScrollTo(500);
