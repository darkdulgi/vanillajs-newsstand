import makeRollingNewsSection from "./feat/rolling/index.js";
import CategoriesAndNewsSection from "./feat/news.js";
import GridCompanySection from "./feat/grid.js";
const $viewDateDOM = document.querySelector(".date");
function insertDateText(DOM) {
    if (DOM instanceof HTMLElement) {
        const week = ["일", "월", "화", "수", "목", "금", "토"];
        const time = new Date();
        const year = time.getFullYear();
        const month = (time.getMonth() + 1).toString().padStart(2, "0");
        const date = time.getDate().toString().padStart(2, "0");
        const day = time.getDay();
        DOM.innerText = `${year}. ${month}. ${date} ${week[day]}요일`;
    }
}
async function loadNews() {
    const news = await fetch("../data/news.json").then((res) => res.json());
    const company = await fetch("../data/company.json").then((res) => res.json());
    makeRollingNewsSection(news);
    CategoriesAndNewsSection(news, company);
    GridCompanySection(company);
}
insertDateText($viewDateDOM);
loadNews();
