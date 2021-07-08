addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.btn-menu');
    if (menu) {
        menu.addEventListener('click', () => {
            const list = document.querySelector('.nav__menu--list');
            list.classList.toggle('show');
        })
    }
})