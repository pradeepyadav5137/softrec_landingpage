
function toggleMenu() {
    const menu = document.querySelector(".menu_item");
    menu.classList.toggle("active");
}


document.querySelectorAll(".menu_item ul li a").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".menu_item").classList.remove("active");
    });
});

document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
});


window.addEventListener("scroll", function() {
    let menuItem = document.querySelector(".menu_item");
    
    if (window.scrollY > 50) { // If scrolled more than 50px
        menuItem.classList.add("scrolled");
    } else {
        menuItem.classList.remove("scrolled");
    }
});



document.querySelectorAll('.menu_item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump
        
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset if needed
                behavior: 'smooth' // Enable smooth scrolling
            });
        }
    });
});



  


window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".overlay").classList.add("fade-out");
    }, 2000); // Overlay disappears after 2 seconds
});


document.querySelectorAll('.about_more').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent any action
    });
});
