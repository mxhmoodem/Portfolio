/* ------ navbar toggle ------ */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ------ active link for scroll section ------ */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });
    /* ------ sticky navbar ------ */
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /* ------ remove navbar toggle when clicked ------ */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/* ------ scroll reveal ------ */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:2000,
    delay:150,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h3, .skills .skills-bar', { origin: 'left' });
ScrollReveal().reveal('.home-content h1, .about-content, .professional-skill', { origin: 'right' });


/* ------ typed js ------ */
const typed = new Typed('.multiple-text', {
    strings: ['Engineering Student', 'Aspiring Software Engineer'],
    typeSpeed: 100,
    backspeed: 500,
    backDelay: 1000,
    loop: true,
})
