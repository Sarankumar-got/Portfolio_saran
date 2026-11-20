"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeToggle");
    const themes = ["theme-default", "theme-ocean", "theme-rose", "theme-emerald"];
    const storedMode = localStorage.getItem("saranThemeMode") || "dark";
    const storedColor = localStorage.getItem("saranColorTheme") || "theme-default";

    applyMode(storedMode);
    applyColor(storedColor);

    themeBtn?.addEventListener("click", () => {
        const nextMode = document.body.classList.contains("light-mode") ? "dark" : "light";
        applyMode(nextMode);
        localStorage.setItem("saranThemeMode", nextMode);
    });

    themeBtn?.addEventListener("dblclick", () => {
        const current = themes.findIndex((theme) => document.body.classList.contains(theme));
        const next = themes[(current + 1) % themes.length];
        applyColor(next);
        localStorage.setItem("saranColorTheme", next);
    });

    function applyMode(mode) {
        const isLight = mode === "light";
        document.body.classList.toggle("light-mode", isLight);
        const icon = themeBtn?.querySelector("i");
        icon?.classList.toggle("fa-sun", isLight);
        icon?.classList.toggle("fa-moon", !isLight);
        themeBtn?.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }

    function applyColor(theme) {
        themes.forEach((item) => document.body.classList.remove(item));
        if (theme !== "theme-default") {
            document.body.classList.add(theme);
        }
    }
});
