window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0)
});

let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () =>{
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () =>{
    menu.classList.remove('active');
});