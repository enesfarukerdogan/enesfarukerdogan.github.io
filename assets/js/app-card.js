/**
 * Uygulama kartı şablonunu üreten bağımsız component fonksiyonu
 */
function createAppCardTemplate(project, linkData) {
    const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
    const storeButtonsHtml = createCardStoreButtonsTemplate(linkData);

    const iconPath = `assets/images/app-icons/${project.id}.png`;

    return `
        <div class="app-card">
            <div class="card-icon-container">
                <div class="app-icon-wrapper">
                    <img src="${iconPath}" alt="${project.title} Icon" class="app-card-icon" onerror="this.src='assets/images/app-icons/default-icon.png'">
                </div>
            </div>
            
            <h3 class="card-app-title">${project.title}</h3>
            <p class="card-app-desc">${project.description}</p>
            
            <div class="card-tags">
                ${tagsHtml}
            </div>
            
            <div class="card-footer">
                <div class="card-store-icons">
                    ${storeButtonsHtml}
                </div>
            </div>
        </div>
    `;
}

/**
 * Kart altındaki mağaza butonlarını üreten alt yardımcı fonksiyon
 */
function createCardStoreButtonsTemplate(linkData) {
    let buttons = "";

    if (linkData.appStore) {
        buttons += `
            <a href="${linkData.appStore}" target="_blank" class="footer-icon-link" aria-label="iOS">
                <img src="assets/favicons/apple-logo.svg" alt="iOS" class="inline-card-icon">
            </a>
        `;
    }

    if (linkData.googlePlay) {
        buttons += `
            <a href="${linkData.googlePlay}" target="_blank" class="footer-icon-link" aria-label="Android">
                <img src="assets/favicons/google-logo.svg" alt="Android" class="inline-card-icon">
            </a>
        `;
    }

    return buttons;
}