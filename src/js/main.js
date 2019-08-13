const ctas = document.getElementsByClassName("cta");

class Cta {
  constructor(element) {
    this.btn = element.querySelector(".cta__btn");
    this.textbox = element.querySelector(".cta__contact");

    this.btn.addEventListener("click", this.handleClick.bind(this));
  }

  get allOtherOpen() {
    return Array.from(document.getElementsByClassName("cta__contact")).filter(
      elem => elem !== this.textbox && !elem.classList.contains("hidden")
    );
  }

  handleClick() {
    this.allOtherOpen.forEach(elem => elem.classList.add("hidden"));
    this.textbox.classList.toggle("hidden");
  }
}

const cta1 = new Cta(ctas[0]);
const cta2 = new Cta(ctas[1]);
const cta3 = new Cta(ctas[2]);
