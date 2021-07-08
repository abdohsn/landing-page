/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

//attribute to https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
function generateNavItems() {
    let navBar = document.getElementById("navbar__list");
    const fragment = document.createDocumentFragment();
    let navItems = [1, 2, 3, 4, 5];
    for (let i = 0; i < navItems.length; i++) {
        const listIetem = document.createElement("li");
        listIetem.innerHTML = `<a href="#section${navItems[i]}">Section ${navItems[i]}</a>`;
        fragment.appendChild(listIetem);
    }
    navBar.appendChild(fragment);
}
generateNavItems();
// Add class 'active' to section when near top of viewport
let anySection = document.querySelectorAll(".section");

function isInViewPort(element) {
    var distance = element.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener(
    "scroll",
    function (event) {
        // add event on scroll
        anySection.forEach((element) => {
            //for each .thisisatest
            if (isInViewPort(element)) {
                //if in Viewport
                element.classList.add("your-active-class");
            } else {
                element.classList.remove("your-active-class");
            }
            //
        });
    },
    false
);

// Scroll to anchor ID using scrollTO event
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
