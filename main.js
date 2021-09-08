
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

