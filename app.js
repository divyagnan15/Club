const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//Display Mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// show active menu when scrolling

const highlightMenu = () => {
    const element = document.querySelector('.highlight')
    const homeMenu= document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const eventsMenu = document.querySelector('#events-page')
    let scrollPos = window.scrollY

    // adds the highlight class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (indow.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        eventsMenu.classList.remove('highlight')
        return
    }
    else if (indow.innerWidth > 960 && scrollPos < 2345) {
        eventsMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
   


}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)