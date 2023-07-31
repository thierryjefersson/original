export default class ScrollSmooth {
  constructor(links) {
    this.linksInternos = document.querySelectorAll(links);
    this.options = { behavior: "smooth", block: "start" };
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const sectionSelected = document.querySelector(href);
    sectionSelected.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
