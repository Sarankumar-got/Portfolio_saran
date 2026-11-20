"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const themes = [
        ["theme-default", "linear-gradient(135deg,#0d6efd,#54c6ff)"],
        ["theme-rose", "linear-gradient(135deg,#e8488a,#8758ff)"],
        ["theme-emerald", "linear-gradient(135deg,#0ead69,#4d8fdb)"],
        ["theme-ocean", "linear-gradient(135deg,#008dd5,#72f2eb)"]
    ];
    const dock = document.createElement("div");
    dock.className = "theme-dock";
    dock.setAttribute("aria-label", "Color themes");

    themes.forEach(([name, color]) => {
        const button = document.createElement("button");
        button.className = "theme-swatch";
        button.type = "button";
        button.style.setProperty("--swatch", color);
        button.setAttribute("aria-label", `Apply ${name.replace("theme-", "")} theme`);
        button.addEventListener("click", () => {
            document.body.classList.remove("theme-ocean", "theme-rose", "theme-emerald");
            if (name !== "theme-default") document.body.classList.add(name);
            localStorage.setItem("saranColorTheme", name);
        });
        dock.appendChild(button);
    });

    document.body.appendChild(dock);
});
