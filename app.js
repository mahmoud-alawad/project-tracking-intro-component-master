
//show up the navbar on small screen
const collap = document.querySelector('.fa-bars ').addEventListener('click', ()=>{
    const menuBar = document.querySelector('.menu__links');
    menuBar.classList.toggle('open__menu');
});