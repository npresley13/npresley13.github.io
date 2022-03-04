// const navs = [
//     {
//         text: "All Products",
//         url: "#",
//         class: "nav-link"
//     },
//     {
//         text: "Government",
//         url: "#",
//         class: "nav-link" 
//     },
//     {
//         text: "Custom Solutions",
//         url: "#",
//         class: "nav-link" 
//     }
// ]


// // Loops through array and builds the nav's list items

// const createNav = navs.map(nav => `<li class="${nav.class}">
// <a href="${nav.url}">${nav.text}</a></li>`).join(' ');


// // Writes the list items in the navigation

// document.getElementById('primary-navigation').innerHTML = createNav;

// Variables

const primaryNav = document.querySelector(".nav-bar");
const navToggle = document.querySelector(".mobile-nav-toggle");
const hamburger = document.getElementById("hamburger");
const body = document.body;

// Open & Close Mobile Menu

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        hamburger.setAttribute('class', 'fas fa-times');
        body.classList.add('stop-scrolling');
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        hamburger.setAttribute('class', 'fas fa-bars');
        body.classList.remove('stop-scrolling');
    }
});

// Megamenu

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

