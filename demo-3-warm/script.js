const translations = {

    de: {

        navHome: "Home",
        navServices: "Leistungen",
        navAbout: "Über uns",
        navGallery: "Galerie",
        navContact: "Kontakt",

        heroSmall: "WILLKOMMEN",
        heroTitle: "Schönes Haar. Gutes Gefühl.",
        heroText:
            "Persönliche Beratung, entspannte Atmosphäre und ein Look, mit dem du dich wohlfühlst.",

        appointment: "Termin vereinbaren",

        welcomeText:
            "Dein Moment. Dein Stil. Dein Salon.",

        servicesSmall: "FÜR DICH",
        servicesTitle: "Unsere Leistungen",
        servicesIntro:
            "Individuelle Pflege und Styling für deinen persönlichen Look.",

      haircutTitle: "Haarschnitt",
haircutText:
    "Individuelle und typgerechte Haarschnitte, präzise abgestimmt auf deinen persönlichen Stil.",

colorTitle: "Blond & Balayage",
colorText:
    "Exklusive Blondtechniken und Balayage für elegante und harmonische Ergebnisse.",

stylingTitle: "Strähnentechniken",
stylingText:
    "Moderne Strähnentechniken individuell auf Haar, Typ und Persönlichkeit abgestimmt.",

careTitle: "Herrenhaarschnitt",
careText:
    "Präzise und stilvolle Herrenhaarschnitte, bei denen jedes Detail zählt.",

        aboutSmall: "MIT HERZ & LEIDENSCHAFT",
        aboutTitle: "Hier geht es um dich.",

        aboutText1:
            "Jeder Mensch ist anders. Deshalb nehmen wir uns Zeit, deine Wünsche und deinen persönlichen Stil kennenzulernen.",

        aboutText2:
            "Unser Ziel ist nicht nur eine schöne Frisur, sondern dass du den Salon mit einem guten Gefühl verlässt.",

        aboutNote:
            "Die persönliche Geschichte der Saloninhaberin wird später ergänzt.",

        gallerySmall: "EINBLICKE",
        galleryTitle: "Unsere Galerie",
        galleryText:
            "Ein kleiner Einblick in unsere Arbeit und Atmosphäre.",

        contactSmall: "WIR FREUEN UNS AUF DICH",
        contactTitle: "Dein nächster Termin wartet.",
        contactText:
            "Ruf uns an oder besuche uns direkt im Salon.",

        address: "Adresse",
        phone: "Telefon",
        openingHours: "Öffnungszeiten",

        tuesdayFriday: "Dienstag – Freitag",
        saturday: "Samstag",
        sundayMonday: "Sonntag – Montag",
        closed: "Geschlossen"
    },


    en: {

        navHome: "Home",
        navServices: "Services",
        navAbout: "About us",
        navGallery: "Gallery",
        navContact: "Contact",

        heroSmall: "WELCOME",
        heroTitle: "Beautiful hair. Good feeling.",
        heroText:
            "Personal consultation, a relaxed atmosphere and a look that makes you feel good.",

        appointment: "Book an appointment",

        welcomeText:
            "Your moment. Your style. Your salon.",

        servicesSmall: "FOR YOU",
        servicesTitle: "Our Services",
        servicesIntro:
            "Individual care and styling for your personal look.",

        haircutTitle: "Haircut",
haircutText:
    "Individual haircuts precisely tailored to your personal style and features.",

colorTitle: "Blonde & Balayage",
colorText:
    "Exclusive blonde techniques and balayage for elegant and harmonious results.",

stylingTitle: "Highlighting Techniques",
stylingText:
    "Modern highlighting techniques individually tailored to your hair, features and personality.",

careTitle: "Men's Haircut",
careText:
    "Precise and stylish men's haircuts where every detail matters.",

        aboutSmall: "WITH HEART & PASSION",
        aboutTitle: "It's all about you.",

        aboutText1:
            "Everyone is different. That's why we take the time to understand your wishes and personal style.",

        aboutText2:
            "Our goal is not only a beautiful hairstyle, but for you to leave the salon feeling good.",

        aboutNote:
            "The salon owner's personal story will be added later.",

        gallerySmall: "IMPRESSIONS",
        galleryTitle: "Our Gallery",
        galleryText:
            "A small glimpse into our work and atmosphere.",

        contactSmall: "WE LOOK FORWARD TO SEEING YOU",
        contactTitle: "Your next appointment is waiting.",
        contactText:
            "Call us or visit us directly at the salon.",

        address: "Address",
        phone: "Phone",
        openingHours: "Opening Hours",

        tuesdayFriday: "Tuesday – Friday",
        saturday: "Saturday",
        sundayMonday: "Sunday – Monday",
        closed: "Closed"
    }
};


const deButton = document.getElementById("de-btn");
const enButton = document.getElementById("en-btn");


function changeLanguage(language) {

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });

    document.documentElement.lang = language;

    deButton.classList.toggle("active", language === "de");
    enButton.classList.toggle("active", language === "en");
}


deButton.addEventListener("click", () => {
    changeLanguage("de");
});


enButton.addEventListener("click", () => {
    changeLanguage("en");
});


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});