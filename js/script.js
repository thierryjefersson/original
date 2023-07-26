import TabCircleRouletSection from "./modules/tabcircle-rouletSection";
import Accordion from "./modules/accordion";

const section01 = new TabCircleRouletSection(".item-circle", ".main-banner");
section01.init();

const faqList = new Accordion("[data-anime='accordion'] dt");
faqList.init();
