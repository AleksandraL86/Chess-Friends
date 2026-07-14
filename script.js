async function changeLanguage(language) {
    const response = await fetch(`lang/${language}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");

        if (translations[key]) {
            element.innerHTML = translations[key];
        }
    });

    localStorage.setItem("language", language);
}

window.onload = () => {
    const savedLanguage = localStorage.getItem("language") || "en";
    changeLanguage(savedLanguage);
};