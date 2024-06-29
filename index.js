// script.js
document.addEventListener("DOMContentLoaded", () => {
    const languageButton = document.getElementById("languageButton");
    const languageButtonImage = document.getElementById("languageButtonImage");

    // Button images for different languages
    const buttonImages = {
        en: "img/US flag.png",
        fr: "img/Fr flag.png"
    };

    // Default language
    let currentLanguage = 'en';

    // Function to change language image
    const changeLanguageImage = () => {
        currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
        languageButtonImage.src = buttonImages[currentLanguage];
        languageButtonImage.alt = currentLanguage === 'en' ? 'English' : 'French';
    };

    // Add event listener to button
    languageButton.addEventListener("click", changeLanguageImage);

});