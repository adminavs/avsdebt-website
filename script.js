// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    } else {
        header.style.background = "rgba(0,0,0,.65)";
        header.style.boxShadow = "none";
    }

});

// Fade in sections
const sections = document.querySelectorAll(".section, .card, .stats div");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:.2
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition=".8s";

    observer.observe(section);

});
