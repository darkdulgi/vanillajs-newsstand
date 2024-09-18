import switchNewsWithAni from "./switchNewsWithAni.js";
export default function loadNews(_news, mouseHover, $newsPreviewDOMList) {
    const news = Object.values(_news).flat();
    let leftNewsIndex = 0;
    let rightNewsIndex = Math.floor(Math.random() * 1000); // 0 ~ 999의 난수
    const newsLength = news.length;
    switchNewsWithAni(leftNewsIndex, 0, true, $newsPreviewDOMList, news);
    switchNewsWithAni(rightNewsIndex % newsLength, 2, true, $newsPreviewDOMList, news);
    leftNewsIndex++;
    rightNewsIndex++;
    let lastTime = 0;
    let isRightNewsSwitched = false;
    const bigInterval = 5000; // 5초
    const smallInterval = 1000; // 1초
    function execPerFrame(currentTime) {
        if (currentTime - lastTime >= bigInterval) {
            isRightNewsSwitched = false;
            lastTime = currentTime;
            if (!mouseHover[0] && !mouseHover[1]) {
                switchNewsWithAni(leftNewsIndex % newsLength, 0, false, $newsPreviewDOMList, news);
                leftNewsIndex++;
            }
        }
        if (currentTime - lastTime >= smallInterval && !isRightNewsSwitched) {
            isRightNewsSwitched = true;
            if (!mouseHover[2] && !mouseHover[3]) {
                switchNewsWithAni(rightNewsIndex % newsLength, 2, false, $newsPreviewDOMList, news);
                rightNewsIndex++;
            }
        }
        requestAnimationFrame(execPerFrame);
    }
    requestAnimationFrame(execPerFrame);
}
