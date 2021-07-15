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

const sectionsList = document.getElementsByTagName("section");
const sections = Array.from(sectionsList);

(function () {
    let navBar = document.getElementById("navbar__list");
    const fragment = document.createDocumentFragment();

    for (const [i, section] of sections.entries()) {
        const listItem = document.createElement("li");
        listItem.setAttribute("id", `sectionItem${i}`);
        listItem.innerHTML = `<a id="sectionLink${i}" href="#${section.id}">${
            section.getElementsByTagName("h2")[0].innerHTML
        }</a>`;
        fragment.appendChild(listItem);
    }
    // const listAnchors = document.getElementsByClassName("active");
    // listAnchors.classList.remove("active");

    // for (let i = 0; i < navItems.length; i++) {
    //     const listIetem = document.createElement("li");
    //     listIetem.innerHTML = `<a href="#section${navItems[i]}">Section ${navItems[i]}</a>`;
    //     fragment.appendChild(listIetem);
    // }
    navBar.appendChild(fragment);
})();
// generateNavItems();
// Add class 'active' to section when near top of viewport

function isInViewPort(element) {
    let distance = element.getBoundingClientRect();
    return distance.top > -250 && distance.top < 50;
}
window.addEventListener(
    "scroll",
    function (event) {
        // add event on scroll
        sections.forEach((element) => {
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

const listItems = document.getElementsByTagName("li");
const listItemsArray = Array.from(listItems);
listItemsArray.forEach((element, i) => {
    let link = document.getElementById(`sectionLink${i}`);
    linkClickListener(link);
});

function linkClickListener(link) {
    link.addEventListener(
        "click",
        function (e) {
            // console.log(e.target.tagName);
            console.log(e.target);
            // console.log(e.target.id);
            let listIetemClicked = e.target;
            // let listIetemClickedIndex = listIetemClicked
            //     .getAttribute("id")
            //     .split("sectionLink")[1];
            // // console.log(listIetemClickedIndex);
            const old = document.getElementsByClassName("active")[0];
            if(old !== undefined){
                old.classList.remove("active");
            }
            listIetemClicked.classList.add("active");
            

            // if clicked on any other li
            // remove active form  old listIetemClicked
            // add on the new listIetemClicked

            // add event on scroll

            // listItemsArray.forEach((element) => {
            //     let elementClickedIndex = element
            //         .getAttribute("id")
            //         .split("sectionItem")[1];
            //     if (elementClickedIndex !== listIetemClickedIndex) {
            //         let link = document.getElementById(
            //             `sectionLink${elementClickedIndex}`
            //         );
            //         link.classList.remove("active");
            //     }
            // });
        },
        false
    );
}

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
