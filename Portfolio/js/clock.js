"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const clock = document.getElementById("digitalClock");
    if (!clock) return;
    clock.setAttribute("title", "Updates every second using your browser time.");
});
