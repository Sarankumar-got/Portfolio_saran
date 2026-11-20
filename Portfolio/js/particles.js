"use strict";

document.addEventListener("DOMContentLoaded", () => {
    if (!window.particlesJS || !document.getElementById("particles-js")) return;

    particlesJS("particles-js", {
        particles: {
            number: {
                value: window.innerWidth < 768 ? 38 : 76,
                density: {
                    enable: true,
                    value_area: 950
                }
            },
            color: {
                value: ["#54c6ff", "#0d6efd", "#7c5cff"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: .45,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 145,
                color: "#54c6ff",
                opacity: .22,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.4,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 180,
                    line_linked: {
                        opacity: .6
                    }
                },
                push: {
                    particles_nb: 3
                }
            }
        },
        retina_detect: true
    });
});
