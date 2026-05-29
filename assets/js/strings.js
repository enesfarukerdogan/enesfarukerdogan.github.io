const AppProjectConfigs = {
    hasNextProject: false, // Devam eden proje varsa true, yoksa false yapman yeterli
    nextProjectProgress: 0, // Sadece sayıyı değiştirmen yeterli
    nextProjectTags: ["Kotlin Multiplatform", "Compose Multiplatform"]
};

const AppStrings = {
    // Navbar
    navLogo: "Enes Faruk Erdoğan",
    navLinkApps: "Tüm Uygulamalarım",
    navLinkNextProject: "Sıradaki Proje",
    navLinkStack: "Mutfak",

    // Hero Section
    heroTitle: "SubTrack<br>Yayında",
    heroDescription: "Unutulan aboneliklere para kaptırmaya son! Subtrack’in minimalist arayüzüyle harcamalarını yönet, ödeme günlerini kaçırma. Bütçeni kontrol altına almanın en şık yolu.",

    // Apps Section
    appsSectionTitle: "Tüm Uygulamalarım",

    // Next Project Section
    nextProjectSectionTitle: "Üzerinde Çalıştığım Sonraki Proje",
    nextProjectStatus: "GELİŞTİRME AŞAMASINDA",
    nextProjectTitle: "Project X",
    nextProjectDescription: "Project X, Test projesi",
    progressLabel: "Tamamlanma Oranı",

    // Stack Section
    stackSectionTitle: "Teknoloji Mutfağım",
    stackSubTitle: "Geliştirme süreçlerimde kullandığım modern teknolojiler",

    // Footer
    footerCopyright: "© 2026 Enes Faruk Erdoğan. Tüm hakları saklıdır."
};

// Mutfakta sergilenecek teknolojilerin dinamik listesi
const AppTechStack = [
    { id: "kotlin", name: "KOTLIN" },
    { id: "jetpackcompose", name: "COMPOSE" },
    { id: "swift", name: "SWIFT" },
    { id: "firebase", name: "FIREBASE" },
    { id: "git", name: "GIT" },
    { id: "android", name: "ANDROID" },
    { id: "ios", name: "iOS" },
];

// Dinamik uygulamalar dizisi
const AppProjectStrings = [
    {
        id: "subtrack",
        title: "SubTrack",
        description: "Subtrack’in minimalist arayüzüyle harcamalarını yönet, ödeme günlerini kaçırma.",
        tags: ["KotlinMultiplatform", "Compose"]
    }
];