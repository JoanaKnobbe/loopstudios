const btn = document.getElementById('menu-btn');
const hamburgerMenu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open')
    hamburgerMenu.classList.toggle('flex')
    hamburgerMenu.classList.toggle('hidden')
}