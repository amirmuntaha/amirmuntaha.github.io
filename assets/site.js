(() => {
    const root = document.documentElement;
    const languageButtons = document.querySelectorAll('[data-set-lang]');
    const languageBlocks = document.querySelectorAll('[data-lang]');
    const sectionLinks = document.querySelectorAll('[data-section-link]');
    const menuButton = document.querySelector('[data-menu-button]');
    const menu = document.querySelector('[data-menu]');

    function setLanguage(language) {
        const selected = language === 'en' ? 'en' : 'id';
        root.lang = selected;
        localStorage.setItem('site-language', selected);

        languageBlocks.forEach((element) => {
            element.hidden = element.dataset.lang !== selected;
        });

        languageButtons.forEach((button) => {
            const isActive = button.dataset.setLang === selected;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        sectionLinks.forEach((link) => {
            const suffix = selected === 'en' ? '-en' : '';
            link.setAttribute('href', `#${link.dataset.sectionLink}${suffix}`);
        });

        const description = document.body.dataset[`description${selected.toUpperCase()}`];
        if (description) {
            document.querySelector('meta[name="description"]')?.setAttribute('content', description);
        }
    }

    languageButtons.forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.setLang));
    });

    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.textContent = isOpen ? '×' : '☰';
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.textContent = '☰';
            });
        });
    }

    setLanguage(localStorage.getItem('site-language') || 'id');
})();
