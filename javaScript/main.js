let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");
// End Header
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute("id");
        if (top => offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                // document.querySelector("header .navbar a[href*="+id+"]").classList.add("active");
            })
        }
    })
}
document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active");
}
document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active");
}
// End Search Form
// var swiper = new Swiper(".home-slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     loop: true,
// });
// End Slider
// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     centeredSlides: true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     loop: true,
//     breakpoint: {
//         0: {
//             slidesperView: 1,
//         },
//         640: {
//             slidesperView: 2,
//         },
//         768: {
//             slidesperView: 2,
//         },
//         1024: {
//             slidesperView: 3,
//         },
//     }
// });
// End review slider
function loader () {
    document.querySelector(".loader-container").classList.add("fade-out")
}
function fadeOut () {
    setInterval(loader,3000);
}
window.onload = fadeOut;
// End loader