export default class TabCircleRouletSection {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
    this.activeClass = "active";
  }

  activeTab(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove(this.activeClass);
    });
    this.tabMenu.forEach((content) => {
      content.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass);
    this.tabMenu[index].classList.add(this.activeClass);
  }

  rotationImgsSection01() {
    let count = 0;
    this.rouletImgs = setInterval(() => {
      count += 1;
      if (count >= this.tabContent.length) {
        count = 0;
      }
      this.activeTab(count);
    }, 10000);
  }

  addTabMenuEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.activeTab(index);
        if (this.rouletImgs) {
          clearInterval(this.rouletImgs);
          this.rotationImgsSection01();
        }
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.rotationImgsSection01();
      this.addTabMenuEvent();
    }
    return this;
  }
}
