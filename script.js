
        const themeToggler = document.getElementById('theme-toggler');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.body.className = currentTheme;
        } else {
            document.body.classList.add('night-mode');
            localStorage.setItem('theme', 'night-mode');
        }

        themeToggler.addEventListener('click', () => {
            let theme = 'night-mode';
            if (document.body.classList.contains('night-mode')) {
                theme = 'light-mode';
                themeToggler.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                theme = 'night-mode';
                themeToggler.innerHTML = '<i class="fas fa-sun"></i>';
            }
            document.body.className = theme;
            localStorage.setItem('theme', theme);
        });

        const welcomeTextElement = document.getElementById('welcome-text');
        const languageIconElement = document.getElementById('language-icon');

        let languageIndex = 0;

        const languages = [
            {
                text: "Benvenuti nel mio sito web",
                icon: "fa-flag"
            },
            {
                text: "Welcome to my website",
                icon: "fa-flag-usa"
            },
            {
                text: "Bienvenue sur mon site web",
                icon: "fa-flag-fr"
            }
        ];

        function updateLanguage() {
            welcomeTextElement.classList.add('fade-out');

            setTimeout(() => {
                welcomeTextElement.textContent = languages[languageIndex].text;
                languageIconElement.className = `fas ${languages[languageIndex].icon}`;

                welcomeTextElement.classList.remove('fade-out');
                welcomeTextElement.classList.add('fade-in');

                setTimeout(() => {
                    welcomeTextElement.classList.remove('fade-in');
                }, 500);

                languageIndex = (languageIndex + 1) % languages.length;
            }, 500);
        }

        setInterval(updateLanguage, 3000);
