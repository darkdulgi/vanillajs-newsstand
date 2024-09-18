import loadNews from "./loadNews.js";
export default function makeRollingNewsSection(_news) {
    const $newsPreviewDOMList = document.querySelectorAll(".invisible-box span"); // 좌측 언론사, 좌측 기사제목, 우측 언론사, 우측 기사제목, 총 4개 DOM
    const mouseHover = [0, 0, 0, 0];
    for (let i = 0; i < $newsPreviewDOMList.length; i++) {
        $newsPreviewDOMList[i].addEventListener("mouseenter", () => {
            mouseHover[i] = 1;
        });
        $newsPreviewDOMList[i].addEventListener("mouseleave", () => {
            mouseHover[i] = 0;
        });
    }
    loadNews(_news, mouseHover, $newsPreviewDOMList);
}
