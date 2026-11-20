"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("typing");

    if (!target || !window.Typed) return;

    new Typed("#typing", {
        strings: [
            "IT Support Engineer",
            "Python Developer",
            "Oracle Database Developer",
            "Desktop Application Developer",
            "Flutter Developer",
            "Business Automation Builder"
        ],
        typeSpeed: 58,
        backSpeed: 34,
        backDelay: 1500,
        startDelay: 350,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: "|"
    });
});
