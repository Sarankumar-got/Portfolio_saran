"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletterForm");
    const email = document.getElementById("newsletterEmail");
    const banner = document.getElementById("cookieBanner");
    const accept = document.getElementById("cookieAccept");

    if (localStorage.getItem("saranCookiesAccepted") !== "true") {
        banner?.classList.add("visible");
    }

    accept?.addEventListener("click", () => {
        localStorage.setItem("saranCookiesAccepted", "true");
        banner?.classList.remove("visible");
    });

    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!email?.checkValidity()) {
            email?.focus();
            window.showPortfolioToast?.("Please enter a valid email address.");
            return;
        }

        const subscribers = JSON.parse(localStorage.getItem("saranSubscribers") || "[]");
        const cleanEmail = email.value.replace(/[<>]/g, "").trim();
        if (!subscribers.includes(cleanEmail)) subscribers.push(cleanEmail);
        localStorage.setItem("saranSubscribers", JSON.stringify(subscribers));
        form.reset();
        window.showPortfolioToast?.("Subscribed locally. Connect EmailJS or a backend to collect subscribers online.");
    });
});
