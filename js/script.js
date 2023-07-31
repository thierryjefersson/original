import TabCircleRouletSection from "./modules/tabcircle-rouletSection";
import Accordion from "./modules/accordion";
import ScrollSmooth from "./modules/scrollSmooth";

const section01 = new TabCircleRouletSection(".item-circle", ".main-banner");
section01.init();

const faqList = new Accordion("[data-anime='accordion'] dt");
faqList.init();

const scrollSmooth = new ScrollSmooth("#btn-01");
scrollSmooth.init();
