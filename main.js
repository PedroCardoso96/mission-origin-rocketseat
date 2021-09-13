
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

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll(){

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
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
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

const backToTopButton = document.querySelector('.back-to-top')

function backToTop(){

    if(window.scrollY >= 550){
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }


}


// Active navigation according to the viewed section
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection(){
    
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.add('active')

        } else{
            document
            .querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.remove('active')

        }
    }
    
}

// When Scroll

window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})






