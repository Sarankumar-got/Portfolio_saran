"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader-mark");
    if (!loader || loader.querySelector("small")) return;

    const percent = document.createElement("small");
    percent.textContent = "0%";
    loader.appendChild(percent);

    let value = 0;
    const timer = window.setInterval(() => {
        value = Math.min(value + 8, 100);
        percent.textContent = `${value}%`;
        if (value === 100) window.clearInterval(timer);
    }, 45);
});
