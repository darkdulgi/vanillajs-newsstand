import rollingNewsSection from "./rolling.js";
import CategoriesAndNewsSection from "./news.js";
import GridCompanySection from "./grid.js";

const $viewDateDOM = document.querySelector(".date");

let news = {};
let newsCom = {};
const loadNews = async () => {
  news = await (await (await fetch("/data/news.json")).json()).ctg;
  newsCom = await (await (await fetch("/data/company.json")).json()).company;
  rollingNewsSection(news);
  CategoriesAndNewsSection(news, newsCom);
  GridCompanySection(newsCom);
};

function insertDateText($DOM: Element | null) {
  if ($DOM instanceof HTMLElement) {
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const time = new Date();
    const year = time.getFullYear();
    const month: string = (time.getMonth() + 1).toString().padStart(2, "0");
    const date: string = time.getDate().toString().padStart(2, "0");
    const day = time.getDay();

    $DOM.innerText = `${year}. ${month}. ${date} ${week[day]}요일`;
  }
}

insertDateText($viewDateDOM);
loadNews();
