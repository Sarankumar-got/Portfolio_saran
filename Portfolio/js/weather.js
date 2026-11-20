"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const meta = document.getElementById("weatherMeta");
    if (!meta || meta.textContent !== "Detecting...") return;

    window.setTimeout(() => {
        if (meta.textContent === "Detecting...") meta.textContent = "Open-Meteo ready";
    }, 4500);
});
