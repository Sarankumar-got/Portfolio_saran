"use strict";

const portfolio = {
    githubUser: "Sarankumar-got",
    emailJs: {
        publicKey: "",
        serviceId: "",
        templateId: ""
    },
    skills: [
        { name: "Python", level: 92, category: "language", icon: "fa-brands fa-python" },
        { name: "JavaScript", level: 82, category: "language", icon: "fa-brands fa-js" },
        { name: "Flutter", level: 78, category: "language", icon: "fa-brands fa-flutter" },
        { name: "VB.NET", level: 80, category: "language", icon: "fa-solid fa-code" },
        { name: "Oracle Database", level: 88, category: "database", icon: "fa-solid fa-database" },
        { name: "SQL", level: 86, category: "database", icon: "fa-solid fa-table" },
        { name: "Bootstrap", level: 90, category: "tools", icon: "fa-brands fa-bootstrap" },
        { name: "Git & GitHub", level: 84, category: "tools", icon: "fa-brands fa-git-alt" },
        { name: "IT Support", level: 94, category: "support", icon: "fa-solid fa-headset" },
        { name: "Billing Systems", level: 89, category: "support", icon: "fa-solid fa-receipt" }
    ],
    projects: [
        {
            title: "Billing Software Suite",
            category: "python",
            icon: "fa-solid fa-receipt",
            description: "Desktop billing workflow with invoice creation, stock checks, sales summaries, and practical reporting.",
            tech: ["Python", "SQLite", "Tkinter", "Reports"],
            stats: { modules: 8, users: 25, status: "Stable" },
            github: "https://github.com/Sarankumar-got",
            demo: "#contact"
        },
        {
            title: "Oracle Reporting Toolkit",
            category: "database",
            icon: "fa-solid fa-database",
            description: "Reusable Oracle query and reporting helpers for business data checks and operational exports.",
            tech: ["Oracle", "SQL", "Python", "Excel"],
            stats: { modules: 6, users: 12, status: "Active" },
            github: "https://github.com/Sarankumar-got",
            demo: "#contact"
        },
        {
            title: "Inventory Support Dashboard",
            category: "support",
            icon: "fa-solid fa-chart-line",
            description: "Support dashboard concept for tracking stock issues, daily requests, and resolution status.",
            tech: ["Bootstrap", "JavaScript", "AOS", "Charts"],
            stats: { modules: 5, users: 18, status: "Prototype" },
            github: "https://github.com/Sarankumar-got",
            demo: "#contact"
        },
        {
            title: "Flutter Business App",
            category: "flutter",
            icon: "fa-brands fa-flutter",
            description: "Mobile-first screens for business users who need quick access to billing and support workflows.",
            tech: ["Flutter", "Dart", "REST", "UI"],
            stats: { modules: 7, users: 10, status: "Design" },
            github: "https://github.com/Sarankumar-got",
            demo: "#contact"
        },
        {
            title: "IT Support Automation",
            category: "python",
            icon: "fa-solid fa-screwdriver-wrench",
            description: "Scripts and repeatable checklists for device setup, diagnostics, backups, and issue logging.",
            tech: ["Python", "PowerShell", "Windows", "Support"],
            stats: { modules: 9, users: 30, status: "Active" },
            github: "https://github.com/Sarankumar-got",
            demo: "#contact"
        },
        {
            title: "Portfolio Command UX",
            category: "support",
            icon: "fa-solid fa-wand-magic-sparkles",
            description: "Responsive portfolio UI with command palette, filters, counters, animations, and API widgets.",
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            stats: { modules: 11, users: 1, status: "Live" },
            github: "https://github.com/Sarankumar-got",
            demo: "#home"
        }
    ],
    commands: [
        { label: "Go to Home", target: "#home", icon: "fa-solid fa-house" },
        { label: "About Saran", target: "#about", icon: "fa-solid fa-user" },
        { label: "View Skills", target: "#skills", icon: "fa-solid fa-code" },
        { label: "Browse Projects", target: "#projects", icon: "fa-solid fa-layer-group" },
        { label: "Experience", target: "#experience", icon: "fa-solid fa-briefcase" },
        { label: "Contact", target: "#contact", icon: "fa-solid fa-envelope" },
        { label: "Download Resume", target: "resume/sarankumar%20t.pdf", icon: "fa-solid fa-download", download: true }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    // Keep startup work centralized so features stay easy to enable, remove, or test.
    document.body.classList.add("loading");
    initLoader();
    initAos();
    initNavbar();
    initScrollProgress();
    initCounters();
    initResumeCounter();
    initVisitorCounter();
    renderSkills(portfolio.skills);
    initSkillFilter();
    renderProjects(portfolio.projects);
    initProjectControls();
    initProjectModal();
    initPremiumModals();
    initRippleButtons();
    initTiltCards();
    initCursorEffects();
    initCommandPalette();
    initContactForm();
    initGitHub();
    initClock();
    initWeather();
    initExtras();
});

function initLoader() {
    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        window.setTimeout(() => {
            loader?.classList.add("hidden");
            document.body.classList.remove("loading");
        }, 500);
    });
}

function initAos() {
    if (window.AOS) {
        AOS.init({
            duration: 850,
            once: true,
            offset: 80,
            easing: "ease-out-cubic"
        });
    }
}

function initNavbar() {
    const navbar = document.querySelector(".glass-nav");
    const navLinks = document.querySelectorAll(".nav-link");
    const collapse = document.getElementById("menu");

    const updateNav = () => navbar?.classList.toggle("scrolled", window.scrollY > 50);
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (collapse?.classList.contains("show") && window.bootstrap) {
                bootstrap.Collapse.getOrCreateInstance(collapse).hide();
            }
        });
    });
}

function initScrollProgress() {
    const progress = document.getElementById("scrollProgress");
    const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = max > 0 ? (window.scrollY / max) * 100 : 0;
        if (progress) progress.style.width = `${percentage}%`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
}

function initCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateNumber(entry.target, Number(entry.target.dataset.counter));
            observer.unobserve(entry.target);
        });
    }, { threshold: .6 });

    counters.forEach((counter) => observer.observe(counter));
}

function animateNumber(element, target) {
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
}

function initResumeCounter() {
    const key = "saranResumeDownloads";
    const button = document.getElementById("resumeDownload");
    const count = document.getElementById("downloadCount");
    const stat = document.getElementById("downloadStat");

    const render = () => {
        const value = Number(localStorage.getItem(key) || 0);
        if (count) count.textContent = value;
        if (stat) stat.textContent = value;
    };

    render();
    button?.addEventListener("click", () => {
        localStorage.setItem(key, String(Number(localStorage.getItem(key) || 0) + 1));
        render();
    });
}

function initVisitorCounter() {
    const key = "saranVisitorCount";
    const el = document.getElementById("visitorCount");
    const value = Number(localStorage.getItem(key) || 0) + 1;
    localStorage.setItem(key, String(value));
    if (el) animateNumber(el, value);
}

function renderSkills(skills) {
    const grid = document.getElementById("skillGrid");
    if (!grid) return;

    // Skills are data-driven so category filters and progress visuals stay in sync.
    grid.innerHTML = skills.map((skill) => `
        <div class="col-md-6 col-xl-4 skill-item" data-category="${escapeHtml(skill.category)}" data-aos="fade-up">
            <article class="skill-card tilt-card">
                <div class="skill-head">
                    <i class="${escapeHtml(skill.icon)}" aria-hidden="true"></i>
                    <div>
                        <h3>${escapeHtml(skill.name)}</h3>
                        <span>${escapeHtml(capitalize(skill.category))}</span>
                    </div>
                </div>
                <div class="circular-progress" style="--value:${skill.level}">
                    <span>${skill.level}%</span>
                </div>
                <div class="progress" aria-label="${escapeHtml(skill.name)} skill level">
                    <div class="progress-bar" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100" style="width:${skill.level}%"></div>
                </div>
            </article>
        </div>
    `).join("");
}

function initSkillFilter() {
    const buttons = document.querySelectorAll("[data-skill-filter]");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.skillFilter;
            buttons.forEach((item) => item.classList.toggle("active", item === button));
            document.querySelectorAll(".skill-item").forEach((item) => {
                item.hidden = filter !== "all" && item.dataset.category !== filter;
            });
        });
    });
}

function renderProjects(projects) {
    const grid = document.getElementById("projectGrid");
    if (!grid) return;

    // Project cards and modal content use the same source data to avoid drift.
    grid.innerHTML = projects.map((project, index) => `
        <div class="col-md-6 col-xl-4 project-item" data-category="${escapeHtml(project.category)}" data-title="${escapeHtml(project.title.toLowerCase())}" data-index="${index}" data-aos="fade-up">
            <article class="project-card tilt-card">
                <div class="project-visual" role="img" aria-label="${escapeHtml(project.title)} project visual">
                    <i class="${escapeHtml(project.icon)}" aria-hidden="true"></i>
                </div>
                <div class="project-body">
                    <h3>${escapeHtml(project.title)}</h3>
                    <p>${escapeHtml(project.description)}</p>
                    <div class="chip-group">${project.tech.map((tech) => `<span>${escapeHtml(tech)}</span>`).join("")}</div>
                    <div class="project-stats">
                        <span><i class="fa-solid fa-cubes"></i> ${project.stats.modules} modules</span>
                        <span><i class="fa-solid fa-users"></i> ${project.stats.users} users</span>
                    </div>
                    <div class="project-actions">
                        <button class="btn btn-soft btn-sm project-details" type="button" data-index="${index}">
                            <i class="fa-solid fa-up-right-from-square"></i> Details
                        </button>
                        <a class="btn btn-soft btn-sm" href="${escapeAttribute(project.github)}" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-github"></i> GitHub
                        </a>
                        <a class="btn btn-primary btn-sm" href="${escapeAttribute(project.demo)}">
                            <i class="fa-solid fa-play"></i> Demo
                        </a>
                    </div>
                </div>
            </article>
        </div>
    `).join("");
}

function initProjectControls() {
    const search = document.getElementById("projectSearch");
    const buttons = document.querySelectorAll("[data-project-filter]");

    const apply = () => {
        const query = (search?.value || "").trim().toLowerCase();
        const active = document.querySelector("[data-project-filter].active")?.dataset.projectFilter || "all";

        document.querySelectorAll(".project-item").forEach((item) => {
            const categoryMatch = active === "all" || item.dataset.category === active;
            const searchMatch = item.dataset.title?.includes(query);
            item.hidden = !categoryMatch || !searchMatch;
        });
    };

    search?.addEventListener("input", apply);
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((item) => item.classList.toggle("active", item === button));
            apply();
        });
    });
}

function initProjectModal() {
    const modalEl = document.getElementById("projectModal");
    const title = document.getElementById("projectModalTitle");
    const body = document.getElementById("projectModalBody");
    const modal = modalEl && window.bootstrap ? new bootstrap.Modal(modalEl) : null;

    document.addEventListener("click", (event) => {
        const button = event.target.closest(".project-details");
        if (!button || !modal || !title || !body) return;

        const project = portfolio.projects[Number(button.dataset.index)];
        if (!project) return;

        title.textContent = project.title;
        body.innerHTML = `
            <div class="modal-gallery">
                <div><i class="${escapeHtml(project.icon)} fa-2x" aria-hidden="true"></i></div>
                <div><i class="fa-solid fa-chart-simple fa-2x" aria-hidden="true"></i></div>
                <div><i class="fa-solid fa-mobile-screen-button fa-2x" aria-hidden="true"></i></div>
            </div>
            <p>${escapeHtml(project.description)}</p>
            <div class="chip-group mb-3">${project.tech.map((tech) => `<span>${escapeHtml(tech)}</span>`).join("")}</div>
            <div class="project-stats mb-4">
                <span><strong>${project.stats.modules}</strong> Modules</span>
                <span><strong>${project.stats.users}</strong> Users</span>
                <span><strong>${escapeHtml(project.stats.status)}</strong> Status</span>
            </div>
            <div class="project-actions">
                <a class="btn btn-soft" href="${escapeAttribute(project.github)}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> GitHub</a>
                <a class="btn btn-primary" href="${escapeAttribute(project.demo)}"><i class="fa-solid fa-play"></i> Live Demo</a>
            </div>
        `;
        modal.show();
    });
}

function initPremiumModals() {
    const resumeButton = document.getElementById("resumePreview");
    const resumeModalEl = document.getElementById("resumeModal");
    const lightboxEl = document.getElementById("lightboxModal");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxImage = document.getElementById("lightboxImage");
    const resumeModal = resumeModalEl && window.bootstrap ? new bootstrap.Modal(resumeModalEl) : null;
    const lightboxModal = lightboxEl && window.bootstrap ? new bootstrap.Modal(lightboxEl) : null;

    resumeButton?.addEventListener("click", () => resumeModal?.show());

    document.addEventListener("click", (event) => {
        const link = event.target.closest("[data-lightbox-title]");
        if (!link || !lightboxModal || !lightboxImage || !lightboxTitle) return;

        event.preventDefault();
        lightboxTitle.textContent = link.dataset.lightboxTitle || "Preview";
        lightboxImage.src = link.getAttribute("href");
        lightboxImage.alt = lightboxTitle.textContent;
        lightboxModal.show();
    });
}

function initRippleButtons() {
    document.addEventListener("click", (event) => {
        const button = event.target.closest(".ripple-btn, .btn, .filter-btn, .icon-btn");
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        ripple.style.left = `${event.clientX - rect.left - 10}px`;
        ripple.style.top = `${event.clientY - rect.top - 10}px`;
        button.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove());
    });
}

function initTiltCards() {
    const cards = document.querySelectorAll(".tilt-card");

    cards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width - .5) * 10;
            const y = ((event.clientY - rect.top) / rect.height - .5) * -10;
            card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

function initCursorEffects() {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    const glow = document.querySelector(".mouse-glow");
    let lastTrail = 0;

    window.addEventListener("pointermove", (event) => {
        if (dot) {
            dot.style.left = `${event.clientX}px`;
            dot.style.top = `${event.clientY}px`;
        }
        if (ring) {
            ring.style.left = `${event.clientX}px`;
            ring.style.top = `${event.clientY}px`;
        }
        if (glow) {
            glow.style.left = `${event.clientX}px`;
            glow.style.top = `${event.clientY}px`;
        }

        const now = performance.now();
        if (now - lastTrail > 32 && window.innerWidth > 767) {
            lastTrail = now;
            const trail = document.createElement("span");
            trail.className = "trail-dot";
            trail.style.left = `${event.clientX}px`;
            trail.style.top = `${event.clientY}px`;
            document.body.appendChild(trail);
            trail.addEventListener("animationend", () => trail.remove());
        }
    }, { passive: true });
}

function initCommandPalette() {
    const palette = document.getElementById("commandPalette");
    const input = document.getElementById("commandInput");
    const results = document.getElementById("commandResults");
    const openBtn = document.getElementById("commandOpen");

    const render = () => {
        if (!results) return;
        const query = (input?.value || "").toLowerCase();
        const commands = portfolio.commands.filter((item) => item.label.toLowerCase().includes(query));
        results.innerHTML = commands.map((item) => `
            <button class="command-result" type="button" data-target="${escapeAttribute(item.target)}" data-download="${item.download ? "true" : "false"}">
                <span><i class="${escapeHtml(item.icon)}" aria-hidden="true"></i> ${escapeHtml(item.label)}</span>
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </button>
        `).join("");
    };

    const open = () => {
        palette?.classList.add("open");
        palette?.setAttribute("aria-hidden", "false");
        document.body.classList.add("palette-open");
        render();
        window.setTimeout(() => input?.focus(), 40);
    };

    const close = () => {
        palette?.classList.remove("open");
        palette?.setAttribute("aria-hidden", "true");
        document.body.classList.remove("palette-open");
    };

    openBtn?.addEventListener("click", open);
    input?.addEventListener("input", render);
    palette?.addEventListener("click", (event) => {
        if (event.target === palette) close();
    });

    document.addEventListener("keydown", (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
            event.preventDefault();
            open();
        }
        if (event.key === "Escape") close();
        if (event.altKey && event.key.toLowerCase() === "t") {
            document.getElementById("themeToggle")?.click();
        }
    });

    results?.addEventListener("click", (event) => {
        const button = event.target.closest(".command-result");
        if (!button) return;
        const target = button.dataset.target || "#home";
        close();
        if (button.dataset.download === "true") {
            document.getElementById("resumeDownload")?.click();
            return;
        }
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    });
}

function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    if (!form) return;

    if (window.emailjs && portfolio.emailJs.publicKey) {
        emailjs.init({ publicKey: portfolio.emailJs.publicKey });
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        form.classList.add("was-validated");

        if (!form.checkValidity()) {
            status.textContent = "Please check the highlighted fields.";
            status.style.color = "var(--danger)";
            return;
        }

        const data = Object.fromEntries(new FormData(form));
        // Sanitizing client-side protects the UI; server-side validation is still required for a backend.
        const cleanData = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, sanitize(value)]));
        status.textContent = "Sending...";
        status.style.color = "var(--primary-2)";

        try {
            if (window.emailjs && portfolio.emailJs.serviceId && portfolio.emailJs.templateId) {
                await emailjs.send(portfolio.emailJs.serviceId, portfolio.emailJs.templateId, cleanData);
            } else {
                const subject = encodeURIComponent(cleanData.subject);
                const body = encodeURIComponent(`${cleanData.message}\n\nFrom: ${cleanData.name}\nEmail: ${cleanData.email}`);
                window.location.href = `mailto:sarankumar93440@gmail.com?subject=${subject}&body=${body}`;
                await new Promise((resolve) => window.setTimeout(resolve, 400));
            }

            form.reset();
            form.classList.remove("was-validated");
            status.textContent = "Message validated. Your email app is opening.";
            status.style.color = "var(--success)";
            status.classList.add("form-success");
        } catch {
            status.textContent = "Message could not be sent. Please email directly.";
            status.style.color = "var(--danger)";
        }
    });
}

async function initGitHub() {
    const user = portfolio.githubUser;
    const profileEls = {
        name: document.getElementById("githubName"),
        bio: document.getElementById("githubBio"),
        repos: document.getElementById("repoCount"),
        followers: document.getElementById("followersCount"),
        following: document.getElementById("followingCount"),
        languages: document.getElementById("languageBars")
    };

    try {
        const [profileResponse, reposResponse] = await Promise.all([
            fetch(`https://api.github.com/users/${user}`),
            fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`)
        ]);

        if (!profileResponse.ok || !reposResponse.ok) throw new Error("GitHub API failed");
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        if (profileEls.name) profileEls.name.textContent = profile.name || user;
        if (profileEls.bio) profileEls.bio.textContent = profile.bio || "Developer profile loaded from GitHub.";
        if (profileEls.repos) animateNumber(profileEls.repos, profile.public_repos || repos.length);
        if (profileEls.followers) animateNumber(profileEls.followers, profile.followers || 0);
        if (profileEls.following) animateNumber(profileEls.following, profile.following || 0);
        renderLanguages(repos, profileEls.languages);
    } catch {
        if (profileEls.bio) profileEls.bio.textContent = "GitHub stats are temporarily unavailable.";
        renderLanguages([
            { language: "Python" },
            { language: "JavaScript" },
            { language: "HTML" },
            { language: "CSS" }
        ], profileEls.languages);
    }
}

function renderLanguages(repos, container) {
    if (!container) return;

    const counts = repos.reduce((acc, repo) => {
        if (!repo.language) return acc;
        acc[repo.language] = (acc[repo.language] || 0) + 1;
        return acc;
    }, {});

    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const total = entries.reduce((sum, [, count]) => sum + count, 0) || 1;

    container.classList.remove("loading-skeleton");
    container.innerHTML = entries.map(([language, count]) => {
        const percent = Math.round((count / total) * 100);
        return `
            <div class="language-row">
                <span>${escapeHtml(language)}</span>
                <div class="progress"><div class="progress-bar" style="width:${percent}%"></div></div>
                <strong>${percent}%</strong>
            </div>
        `;
    }).join("");
}

function initClock() {
    const clock = document.getElementById("digitalClock");
    const update = () => {
        if (!clock) return;
        clock.textContent = new Intl.DateTimeFormat("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).format(new Date());
    };

    update();
    window.setInterval(update, 1000);
    document.getElementById("year").textContent = new Date().getFullYear();
}

function initWeather() {
    const value = document.getElementById("weatherValue");
    const meta = document.getElementById("weatherMeta");

    const renderFallback = () => {
        if (value) value.textContent = "Tamil Nadu";
        if (meta) meta.textContent = "Weather widget ready";
    };

    if (!navigator.geolocation) {
        renderFallback();
        return;
    }

    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,weather_code`;
            const response = await fetch(url);
            if (!response.ok) throw new Error("Weather failed");
            const data = await response.json();
            if (value) value.textContent = `${Math.round(data.current.temperature_2m)} C`;
            if (meta) meta.textContent = weatherLabel(data.current.weather_code);
        } catch {
            renderFallback();
        }
    }, renderFallback, { timeout: 5000 });
}

function initExtras() {
    const backToTop = document.getElementById("backToTop");
    const chat = document.getElementById("aiChatButton");
    const music = document.getElementById("musicToggle");
    let audioContext;
    let oscillator;
    let egg = "";

    window.addEventListener("scroll", () => {
        backToTop?.classList.toggle("visible", window.scrollY > 500);
    }, { passive: true });

    backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    chat?.addEventListener("click", () => showToast("AI chat is ready as a contact shortcut. Send your requirement through the form or email."));

    music?.addEventListener("click", () => {
        if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (oscillator) {
            oscillator.stop();
            oscillator = null;
            music.classList.remove("active");
            return;
        }
        oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.frequency.value = 220;
        gain.gain.value = .025;
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start();
        music.classList.add("active");
    });

    document.addEventListener("keydown", (event) => {
        egg = (egg + event.key.toLowerCase()).slice(-5);
        if (egg === "saran") {
            document.body.classList.toggle("theme-emerald");
        }
    });
}

function sanitize(value) {
    return String(value).replace(/[<>]/g, "").trim();
}

function escapeHtml(value) {
    // Dynamic portfolio data is escaped before it is written into the DOM.
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
    return escapeHtml(value).replaceAll("`", "&#096;");
}

function capitalize(value) {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

function weatherLabel(code) {
    const labels = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Fog",
        51: "Light drizzle",
        61: "Rain",
        80: "Showers",
        95: "Thunderstorm"
    };

    return labels[code] || "Live weather";
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

window.showPortfolioToast = showToast;
