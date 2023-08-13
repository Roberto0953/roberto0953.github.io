const welcomeTextElement = document.getElementById('welcome-text');
const languageIconElement = document.getElementById('language-icon');

let languageIndex = 0;

const languages = [
    {
        text: "Benvenuti nel mio sito web",
        icon: "twemoji:flag-italy"
    },
    {
        text: "Welcome to my website",
        icon: "twemoji:flag-united-states"
    },
    {
        text: "Bienvenue sur mon site web",
        icon: "twemoji:flag-france"
    }
];

function updateLanguage() {
    welcomeTextElement.classList.add('fade-out');

    setTimeout(() => {
        welcomeTextElement.textContent = languages[languageIndex].text;
        languageIconElement.setAttribute("data-icon", languages[languageIndex].icon);

        welcomeTextElement.classList.remove('fade-out');
        welcomeTextElement.classList.add('fade-in');

        setTimeout(() => {
            welcomeTextElement.classList.remove('fade-in');
        }, 500);

        languageIndex = (languageIndex + 1) % languages.length;
    }, 500);
}

setInterval(updateLanguage, 3000);

