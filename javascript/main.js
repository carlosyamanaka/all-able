function updateElementOnScroll() {
    const navElement = document.querySelector('nav');
    if (window.scrollY === 0) {
        navElement.style.setProperty('--cor-de-fundo-nav', 'transparent');
        navElement.style.setProperty('--cor-links-nav', 'white');
    } else {
        navElement.style.setProperty('--cor-de-fundo-nav', 'white');
        navElement.style.setProperty('--cor-links-nav', '#333');
        navElement.style.setProperty('--globo-icon', '#333');
    } 
}

window.addEventListener('scroll', updateElementOnScroll);

updateElementOnScroll();




document.addEventListener('DOMContentLoaded', function () {
    const logoDiv = document.querySelector('.logo');

    logoDiv.addEventListener('click', function () {
        window.location.href = 'index.html';
        logoDiv.style.cursor= 'pointer';
    });
});
