// import { animatedScrollTo } from "./es6-scroll-to.js";

class StateCta {
  constructor(number) {
    this.state = (() => {
      let newObj = {};
      for (let i = 0; i < number; i++) {
        newObj[`textBox${i ? i : ""}`] = false;
      }

      return { ...newObj };
    })();
  }

  stateLength = () => Object.keys(this.state).length;

  isOpen = () =>
    Object.values(this.state).reduce((total, current) => total + current);

  toggleCta = textBox => {
    if (!this.isOpen() || this.state[textBox]) {
      this.state = { ...this.state, [`${textBox}`]: !this.state[`${textBox}`] };
      document.getElementById(textBox).classList.toggle("hidden");

      return this.state;
    } else {
      let resetBtn = Object.entries(this.state).find(
        elem => elem[1] === true
      )[0];

      this.state = {
        ...this.state,
        [`${textBox}`]: !this.state[`${textBox}`],
        [`${resetBtn}`]: !this.state[`${resetBtn}`]
      };
      document.getElementById(resetBtn).classList.toggle("hidden");
      document.getElementById(textBox).classList.toggle("hidden");

      return this.state;
    }
  };

  bindBtn = () => {
    for (let i = 0; i < this.stateLength(); i++) {
      document.getElementById(`btn${i ? i : ""}`).onclick = () => {
        this.toggleCta(`textBox${i ? i : ""}`);
      };
    }
  };
}

const state = new StateCta(2);

state.bindBtn();

// animatedScrollTo(500);
