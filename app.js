const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

if (menu && menuLinks) {
    menu.addEventListener('click', function () {
        const expanded = menu.getAttribute('aria-expanded') === 'true';
        menu.setAttribute('aria-expanded', String(!expanded));
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    // Close menu with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('is-active')) {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
            menu.setAttribute('aria-expanded', 'false');
            menu.focus();
        }
    });
}
