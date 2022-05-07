(() => {
    "use strict";
    const imageSet = document.getElementById("imageInput");
    const bgBlock = document.querySelector(".datepicker");
    const setBtn = document.getElementById("setButton");
    setBtn.addEventListener("click", (function(e) {
        bgBlock.style.backgroundImage = `url(${imageSet.value})`;
    }));
})();