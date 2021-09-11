
// Toggle menu on click
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

// Close the entire menu by clicking on the links
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}


// Change header when page scrolling

function changeHeaderWhenScroll(){

    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    
        if(window.scrollY >= navHeight){
            header.classList.add('scroll')
        }else{
            header.classList.remove('scroll')
        }
}




// Testimonials carousel (Swiper)

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
  });

//   ScrollReveal

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 400,
    reset: true
})

scrollReveal.reveal(`#home .text, #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social`,
 {interval: 100})


//  Back-to-top


function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top')

    if(window.scrollY >= 550){
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }
}

// When Scroll

window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
})