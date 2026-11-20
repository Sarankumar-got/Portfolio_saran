"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    window.addEventListener("scroll", () => {
        if (!hero) return;
        hero.style.setProperty("--scroll-y", `${window.scrollY * .08}px`);
    }, { passive: true });
});
