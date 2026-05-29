if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
    document.documentElement.classList.add('no-smooth');

    initializeStrings();
    initializeLinks();
    handleNextProjectVisibility();
    renderAppsGrid();
    renderTechStack();

    setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.classList.remove('no-smooth');
    }, 0);
});

function initializeStrings() {
    if (typeof AppStrings !== 'undefined') {
        document.querySelectorAll('[data-text-key]').forEach(element => {
            const key = element.getAttribute('data-text-key');
            if (AppStrings[key]) {
                element.innerHTML = AppStrings[key];
            }
        });
    }
}

function initializeLinks() {
    if (typeof AppLinks !== 'undefined') {
        // Hero Store Butonları
        const heroAppStore = document.querySelector('[data-app-key="featured-ios"]');
        const heroGooglePlay = document.querySelector('[data-app-key="featured-android"]');

        if (heroAppStore && AppLinks.apps.featured.appStore) {
            heroAppStore.href = AppLinks.apps.featured.appStore;
        }
        if (heroGooglePlay && AppLinks.apps.featured.googlePlay) {
            heroGooglePlay.href = AppLinks.apps.featured.googlePlay;
        }

        // --- DINAMIK SOSYAL MEDYA BAĞLANTILARI VE GÖRSELLERİ ---
        const linkedinAnchor = document.getElementById("footer-link-linkedin");
        const githubAnchor = document.getElementById("footer-link-github");

        if (linkedinAnchor && AppLinks.links.linkedin) {
            linkedinAnchor.href = AppLinks.links.linkedin;
            const img = linkedinAnchor.querySelector('.footer-social-icon');
            if (img) img.src = "assets/favicons/linkedin.png";
        }

        if (githubAnchor && AppLinks.links.github) {
            githubAnchor.href = AppLinks.links.github;
            const img = githubAnchor.querySelector('.footer-social-icon');
            if (img) img.src = "assets/favicons/github.svg";
        }
    }
}

function handleNextProjectVisibility() {
    if (typeof AppProjectConfigs === 'undefined') return;

    const nextProjectSection = document.getElementById("next-project");
    const nextProjectNavLink = document.querySelector('a[href="#next-project"]');

    // Önce görünürlük durumunu ayarla
    if (AppProjectConfigs.hasNextProject) {
        if (nextProjectSection) nextProjectSection.style.display = "block";
        if (nextProjectNavLink && nextProjectNavLink.parentElement) {
            nextProjectNavLink.parentElement.style.display = "block";
        }

        // Sıradaki proje içeriklerini doldur
        const progress = AppProjectConfigs.nextProjectProgress || 0;
        const percentText = document.getElementById("next-project-percent");
        const progressBar = document.getElementById("next-project-bar");
        if (percentText) percentText.innerText = `${progress}%`;
        if (progressBar) progressBar.style.width = `${progress}%`;

        const tagsContainer = document.getElementById("next-project-tags");
        if (tagsContainer && AppProjectConfigs.nextProjectTags) {
            tagsContainer.innerHTML = AppProjectConfigs.nextProjectTags
                .map(tag => `<span class="tag">${tag}</span>`)
                .join("");
        }
    } else {
        if (nextProjectSection) nextProjectSection.style.display = "none";
        if (nextProjectNavLink && nextProjectNavLink.parentElement) {
            nextProjectNavLink.parentElement.style.display = "none";
        }
    }

    // DİNAMİK ARKA PLAN ZEBRA YÖNETİMİ (Kritik Alan)
    // Home zaten her zaman --bg-light ile başlar. Sonrasını dinamik dağıtıyoruz.
    const appsSection = document.getElementById("apps");
    const stackContainer = document.getElementById("stack-container");

    if (AppProjectConfigs.hasNextProject) {
        // Sıradaki Proje VARSA düzen: Hero (Açık) -> Apps (Koyu) -> Next (Açık) -> Mutfak (Koyu)
        if (appsSection) appsSection.style.backgroundColor = "var(--bg-dark)";
        if (nextProjectSection) nextProjectSection.style.backgroundColor = "var(--bg-light)";
        if (stackContainer) stackContainer.style.backgroundColor = "var(--bg-dark)";
    } else {
        // Sıradaki Proje YOKSA düzen: Hero (Açık) -> Apps (Koyu) -> Mutfak (Açık)
        if (appsSection) appsSection.style.backgroundColor = "var(--bg-dark)";
        if (stackContainer) stackContainer.style.backgroundColor = "var(--bg-light)";
    }
}

function renderAppsGrid() {
    const gridContainer = document.getElementById("apps-grid");
    if (!gridContainer || typeof AppProjectStrings === 'undefined') return;

    gridContainer.innerHTML = "";

    AppProjectStrings.forEach(project => {
        const linkData = AppProjectLinks[project.id] || {};
        const cardHtml = createAppCardTemplate(project, linkData);
        gridContainer.innerHTML += cardHtml;
    });
}

function renderTechStack() {
    const stackContainer = document.getElementById("tech-logos-container");
    if (!stackContainer || typeof AppTechStack === 'undefined') return;

    stackContainer.innerHTML = ""; // Container'ı temizle

    AppTechStack.forEach(tech => {
        const imagePath = `assets/images/tech-logos/${tech.id}.svg`;

        const techItemHtml = `
            <div class="tech-item">
                <div class="tech-icon-wrapper">
                    <img src="${imagePath}" alt="${tech.name} Logo" class="tech-img" onerror="this.src='assets/images/tech-stack/default.png'">
                </div>
                <span class="tech-name">${tech.name}</span>
            </div>
        `;
        stackContainer.innerHTML += techItemHtml;
    });
}