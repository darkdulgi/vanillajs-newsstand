import { NewsItem } from "../../interface/data.interface.js";

export default function switchNewsWithAni(
  newsIndex: number,
  DOMIndex: number,
  isFirst: boolean,
  $newsPreviewDOMList: NodeListOf<Element>,
  news: NewsItem[],
) {
  const newsLength = news.length;
  const companyDOM = $newsPreviewDOMList[DOMIndex];
  const titleDOM = $newsPreviewDOMList[DOMIndex + 1];
  if (!(companyDOM instanceof HTMLElement) || !(titleDOM instanceof HTMLElement)) return;

  const keyframes = [{ transform: "translateY(0%)" }, { transform: "translateY(-100%)" }];
  const options = {
    duration: 500,
  };

  companyDOM.animate(isFirst ? [] : keyframes, isFirst ? {} : options).onfinish = () => {
    companyDOM.innerText = news[newsIndex].com + "\n" + news[(newsIndex + 1) % newsLength].com;
  };
  titleDOM.animate(isFirst ? [] : keyframes, isFirst ? {} : options).onfinish = () => {
    titleDOM.innerText = news[newsIndex].title + "\n" + news[(newsIndex + 1) % newsLength].title;
  };
  titleDOM.title = news[newsIndex].title;
}
