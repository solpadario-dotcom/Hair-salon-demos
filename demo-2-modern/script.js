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

aboutSmall: "ERFAHRUNG. PRÄZISION. INDIVIDUALITÄT.",
aboutTitle: "Mehr als 15 Jahre Leidenschaft.",

aboutText:
    "Als Friseurmeisterin und Inhaberin meines eigenen Salons verbinde ich langjährige Erfahrung mit dem Anspruch, individuelle Looks zu kreieren, die Persönlichkeit ausstrahlen. Meine besondere Leidenschaft gilt Blondtechniken, Balayage und modernen Strähnentechniken.",

aboutNote:
    "Luxus bedeutet Qualität, Individualität und das Gefühl, genau den richtigen Stil gefunden zu haben.",
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

aboutSmall: "EXPERIENCE. PRECISION. INDIVIDUALITY.",
aboutTitle: "More than 15 years of passion.",

aboutText:
    "As a master hairdresser and owner of my own salon, I combine many years of experience with the goal of creating individual looks that express personality. My particular passion lies in blonde techniques, balayage and modern highlighting techniques.",

aboutNote:
    "Luxury means quality, individuality and the feeling of having found exactly the right style.",

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