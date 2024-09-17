var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import rollingNewsSection from "./rolling.js";
import CategoriesAndNewsSection from "./news.js";
import GridCompanySection from "./grid.js";
const $viewDateDOM = document.querySelector(".date");
let news = {};
let newsCom = {};
const loadNews = () => __awaiter(void 0, void 0, void 0, function* () {
    news = yield (yield (yield fetch("/data/news.json")).json()).ctg;
    newsCom = yield (yield (yield fetch("/data/company.json")).json()).company;
    rollingNewsSection(news);
    CategoriesAndNewsSection(news, newsCom);
    GridCompanySection(newsCom);
});
const getDate = () => {
    const time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let day = time.getDay();
    if (month < 10)
        month = '0' + month;
    if (date < 10)
        date = '0' + date;
    $viewDateDOM.innerText = `${year}. ${month}. ${date} ${week[day]}요일`;
};
getDate();
loadNews();
