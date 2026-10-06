const translations = {

    de: {

        navHome: "Home",
        navServices: "Leistungen",
        navAbout: "Über uns",
        navGallery: "Galerie",
        navContact: "Kontakt",

        heroSmall: "WILLKOMMEN BEI",
        heroText: "Stil. Persönlichkeit. Schönheit.",

        appointment: "Termin vereinbaren",
        appointmentNow: "Jetzt Termin vereinbaren",

        servicesSmall: "HANDWERK. STIL. PRÄZISION.",
servicesTitle: "Unsere Leistungen",

servicesIntro:
    "Individuelle Beratung und präzises Friseurhandwerk für einen Look, der zu dir und deiner Persönlichkeit passt.",

haircutTitle: "Haarschnitt",
haircutText:
    "Individuelle und typgerechte Haarschnitte, präzise abgestimmt auf deinen persönlichen Stil.",

blondeTitle: "Blond & Balayage",
blondeText:
    "Exklusive Blondtechniken und Balayage für elegante und harmonische Ergebnisse.",

highlightsTitle: "Strähnentechniken",
highlightsText:
    "Moderne Strähnentechniken individuell auf Haar, Typ und Persönlichkeit abgestimmt.",

menTitle: "Herrenhaarschnitt",
menText:
    "Präzise und stilvolle Herrenhaarschnitte, bei denen jedes Detail zählt.",

        aboutSmall: "ERFAHRUNG. PRÄZISION. INDIVIDUALITÄT.",
aboutTitle: "Über mich",

aboutText1:
    "Seit über 15 Jahren steht meine Arbeit für anspruchsvolles Friseurhandwerk, Ästhetik und höchste Präzision.",

aboutText2:
    "Als Friseurmeisterin und Inhaberin meines eigenen Salons verbinde ich langjährige Erfahrung mit dem Anspruch, individuelle Looks zu kreieren, die nicht nur schön sind, sondern Persönlichkeit ausstrahlen.",

aboutText3:
    "Meine besondere Leidenschaft gilt exklusiven Blondtechniken, Balayage und modernen Strähnentechniken. Dabei steht für mich nicht ein kurzfristiger Trend im Vordergrund, sondern ein harmonisches und individuell abgestimmtes Ergebnis.",

aboutText4:
    "Auch im Herrenbereich setze ich auf präzise, stilvolle und typgerechte Haarschnitte, bei denen jedes Detail zählt.",

aboutQuote:
    "Luxus bedeutet Qualität, Individualität und das Gefühl, genau den richtigen Stil gefunden zu haben.",

        gallerySmall: "UNSERE ARBEIT",
        galleryTitle: "Galerie",
        galleryText:
            "Eindrücke aus dem Salon und ausgewählte Looks.",

        contactSmall: "WIR FREUEN UNS AUF DICH",
        contactTitle: "Kontakt",

        contactIntro:
            "Vereinbare deinen Termin oder besuche uns direkt im Salon.",

        address: "Adresse",
        phone: "Telefon",
        openingHours: "Öffnungszeiten",

        tuesdayFriday: "Dienstag – Freitag",
        saturday: "Samstag",
        sundayMonday: "Sonntag – Montag",
        closed: "Geschlossen",

        findUs: "FINDE UNS",
        openMaps: "In Google Maps öffnen"
        
    },


    en: {

        navHome: "Home",
        navServices: "Services",
        navAbout: "About us",
        navGallery: "Gallery",
        navContact: "Contact",

        heroSmall: "WELCOME TO",
        heroText: "Style. Personality. Beauty.",

        appointment: "Book an appointment",
        appointmentNow: "Book an appointment",

        servicesSmall: "CRAFT. STYLE. PRECISION.",
servicesTitle: "Our Services",

servicesIntro:
    "Personal consultation and precise hairdressing for a look that suits you and your personality.",

haircutTitle: "Haircut",
haircutText:
    "Individual haircuts precisely tailored to your personal style and features.",

blondeTitle: "Blonde & Balayage",
blondeText:
    "Exclusive blonde techniques and balayage for elegant and harmonious results.",

highlightsTitle: "Highlighting Techniques",
highlightsText:
    "Modern highlighting techniques individually tailored to your hair, features and personality.",

menTitle: "Men's Haircut",
menText:
    "Precise and stylish men's haircuts where every detail matters.",
       aboutSmall: "EXPERIENCE. PRECISION. INDIVIDUALITY.",
aboutTitle: "About me",

aboutText1:
    "For more than 15 years, my work has stood for high-quality hairdressing, aesthetics and precision.",

aboutText2:
    "As a master hairdresser and owner of my own salon, I combine many years of experience with the goal of creating individual looks that are not only beautiful, but also express personality.",

aboutText3:
    "My particular passion lies in exclusive blonde techniques, balayage and modern highlighting techniques. Rather than following short-lived trends, I focus on creating a harmonious result tailored to the individual.",

aboutText4:
    "I also place great emphasis on precise, stylish and individually tailored men's haircuts, where every detail matters.",

aboutQuote:
    "Luxury means quality, individuality and the feeling of having found exactly the right style.",

        gallerySmall: "OUR WORK",
        galleryTitle: "Gallery",

        galleryText:
            "Impressions from the salon and selected looks.",

        contactSmall: "WE LOOK FORWARD TO SEEING YOU",
        contactTitle: "Contact",

        contactIntro:
            "Book your appointment or visit us directly at the salon.",

        address: "Address",
        phone: "Phone",
        openingHours: "Opening Hours",

        tuesdayFriday: "Tuesday – Friday",
        saturday: "Saturday",
        sundayMonday: "Sunday – Monday",
        closed: "Closed",

        findUs: "FIND US",
        openMaps: "Open in Google Maps"
    }
};


/* LANGUAGE */

const deButton = document.getElementById("de-btn");
const enButton = document.getElementById("en-btn");


function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {

        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });


    document.documentElement.lang = language;


    deButton.classList.toggle(
        "active",
        language === "de"
    );

    enButton.classList.toggle(
        "active",
        language === "en"
    );

}


deButton.addEventListener("click", () => {
    changeLanguage("de");
});


enButton.addEventListener("click", () => {
    changeLanguage("en");
});


/* MOBILE MENU */

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");


function closeMenu() {

    navLinks.classList.remove("active");

    menuToggle.textContent = "☰";

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


menuToggle.addEventListener("click", () => {

    const menuIsOpen =
        navLinks.classList.toggle("active");


    menuToggle.textContent =
        menuIsOpen ? "✕" : "☰";


    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen.toString()
    );

});


document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


/* CLOSE MENU WHEN RETURNING TO DESKTOP */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {
        closeMenu();
    }

});