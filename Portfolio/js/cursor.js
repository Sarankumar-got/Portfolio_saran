"use strict";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn, .icon-btn, .social a, .contact-action").forEach((item) => {
        item.addEventListener("pointerenter", () => document.body.classList.add("cursor-active"));
        item.addEventListener("pointerleave", () => document.body.classList.remove("cursor-active"));
    });
});
