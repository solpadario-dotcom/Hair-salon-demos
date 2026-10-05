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

        servicesSmall: "SCHÖNHEIT BEGINNT MIT DEINEM STIL",
        servicesTitle: "Unsere Leistungen",
        servicesIntro:
            "Individuelle Beratung und professionelle Haarpflege für einen Look, der zu dir passt.",

        haircutTitle: "Haarschnitt",
        haircutText:
            "Individuelle Schnitte passend zu deinem Stil, Typ und deinen Wünschen.",

        colorTitle: "Coloration",
        colorText:
            "Moderne Farbtechniken und individuelle Farbergebnisse für deinen Look.",

        stylingTitle: "Styling",
        stylingText:
            "Professionelles Styling für Alltag, besondere Momente und Events.",

        careTitle: "Haarpflege",
        careText:
            "Pflege und Beratung für gesundes, glänzendes und schönes Haar.",

        aboutSmall: "PERSÖNLICH. MODERN. INDIVIDUELL.",
        aboutTitle: "Über uns",

        aboutText1:
            "Jeder Mensch ist einzigartig – und genauso sollte auch sein Look sein.",

        aboutText2:
            "Mit persönlicher Beratung, Erfahrung und Leidenschaft schaffen wir Frisuren, die zu deiner Persönlichkeit und deinem Alltag passen.",

        aboutNote:
            "Der persönliche Text der Saloninhaberin wird später ergänzt.",

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

        servicesSmall: "BEAUTY BEGINS WITH YOUR STYLE",
        servicesTitle: "Our Services",

        servicesIntro:
            "Personal consultation and professional hair care for a look that suits you.",

        haircutTitle: "Haircut",
        haircutText:
            "Individual haircuts tailored to your style, personality and wishes.",

        colorTitle: "Coloring",
        colorText:
            "Modern coloring techniques and individual results created for your look.",

        stylingTitle: "Styling",
        stylingText:
            "Professional styling for everyday life, special moments and events.",

        careTitle: "Hair Care",
        careText:
            "Professional care and advice for healthy, shiny and beautiful hair.",

        aboutSmall: "PERSONAL. MODERN. INDIVIDUAL.",
        aboutTitle: "About us",

        aboutText1:
            "Every person is unique – and their look should be too.",

        aboutText2:
            "With personal consultation, experience and passion, we create hairstyles that suit your personality and everyday life.",

        aboutNote:
            "The salon owner's personal story will be added later.",

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