"use strict";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("pinnedRepos");
    if (!container) return;

    try {
        const response = await fetch("https://api.github.com/users/Sarankumar-got/repos?per_page=6&sort=updated");
        if (!response.ok) throw new Error("GitHub unavailable");
        const repos = await response.json();
        renderRepos(repos.slice(0, 4));
    } catch {
        renderRepos([
            { name: "billing-software-suite", description: "Billing, stock, and reporting workflow.", html_url: "https://github.com/Sarankumar-got", language: "Python" },
            { name: "oracle-reporting-toolkit", description: "Oracle reporting and export helpers.", html_url: "https://github.com/Sarankumar-got", language: "SQL" }
        ]);
    }

    function renderRepos(repos) {
        container.classList.remove("loading-skeleton");
        container.innerHTML = repos.map((repo) => `
            <a class="repo-card" href="${escapeAttribute(repo.html_url)}" target="_blank" rel="noopener noreferrer">
                <h4>${escapeHtml(repo.name)}</h4>
                <p>${escapeHtml(repo.description || "Updated portfolio repository.")}</p>
                <span><i class="fa-solid fa-code"></i> ${escapeHtml(repo.language || "Code")}</span>
            </a>
        `).join("");
    }
});
