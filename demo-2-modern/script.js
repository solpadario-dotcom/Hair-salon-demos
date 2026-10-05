const translations = {

    de: {
        address: "Adresse",
phone: "Telefon",
openingHours: "Öffnungszeiten",

tuesdayFriday: "Dienstag – Freitag",
saturday: "Samstag",
sundayMonday: "Sonntag – Montag",
closed: "Geschlossen",

        navHome: "Home",
        navServices: "Leistungen",
        navAbout: "Über uns",
        navGallery: "Galerie",
        navContact: "Kontakt",

        heroSmall: "DEIN LOOK. DEIN STIL.",
        heroTitle: "Hair that feels like you.",
        heroDescription:
            "Moderne Schnitte, individuelle Beratung und ein Look, der wirklich zu dir passt.",

        appointment: "Termin vereinbaren",
        discoverWork: "Unsere Arbeit",

        servicesSmall: "WAS WIR LIEBEN",
        servicesTitle: "Unsere Leistungen",

        haircutTitle: "Haarschnitt",
        haircutText:
            "Moderne und klassische Schnitte individuell auf dich abgestimmt.",

        colorTitle: "Coloration",
        colorText:
            "Farbe, Highlights und moderne Techniken für deinen persönlichen Look.",

        stylingTitle: "Styling",
        stylingText:
            "Styling für Alltag, Events und besondere Momente.",

        careTitle: "Haarpflege",
        careText:
            "Professionelle Pflege für gesundes und glänzendes Haar.",

        aboutSmall: "SCHÖNHEIT IST PERSÖNLICH",
        aboutTitle: "Mehr als nur ein Haarschnitt.",
        aboutText:
            "Wir nehmen uns Zeit, deinen Stil, deine Wünsche und dein Haar kennenzulernen. So entsteht ein Look, der nicht nur gut aussieht, sondern sich auch richtig anfühlt.",

        aboutNote:
            "Der persönliche Text der Saloninhaberin wird später ergänzt.",

        gallerySmall: "INSPIRATION",
        galleryTitle: "Selected Looks",

        contactSmall: "BESUCH UNS",
        contactTitle: "Zeit für deinen neuen Look?",
        contactText:
            "Ruf uns an oder besuche uns direkt im Salon."
    },

    en: {
        address: "Address",
phone: "Phone",
openingHours: "Opening Hours",

tuesdayFriday: "Tuesday – Friday",
saturday: "Saturday",
sundayMonday: "Sunday – Monday",
closed: "Closed",

        navHome: "Home",
        navServices: "Services",
        navAbout: "About",
        navGallery: "Gallery",
        navContact: "Contact",

        heroSmall: "YOUR LOOK. YOUR STYLE.",
        heroTitle: "Hair that feels like you.",
        heroDescription:
            "Modern cuts, personal consultation and a look that truly suits you.",

        appointment: "Book an appointment",
        discoverWork: "Our work",

        servicesSmall: "WHAT WE LOVE",
        servicesTitle: "Our Services",

        haircutTitle: "Haircut",
        haircutText:
            "Modern and classic cuts individually tailored to you.",

        colorTitle: "Coloring",
        colorText:
            "Color, highlights and modern techniques for your personal look.",

        stylingTitle: "Styling",
        stylingText:
            "Professional styling for everyday life, events and special moments.",

        careTitle: "Hair Care",
        careText:
            "Professional care for healthy and shiny hair.",

        aboutSmall: "BEAUTY IS PERSONAL",
        aboutTitle: "More than just a haircut.",
        aboutText:
            "We take the time to understand your style, your wishes and your hair. The result is a look that not only looks good, but feels right too.",

        aboutNote:
            "The salon owner's personal story will be added later.",

        gallerySmall: "INSPIRATION",
        galleryTitle: "Selected Looks",

        contactSmall: "VISIT US",
        contactTitle: "Ready for your new look?",
        contactText:
            "Call us or visit us directly at the salon."
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