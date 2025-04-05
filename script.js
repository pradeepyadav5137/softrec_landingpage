
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
    
    if (window.scrollY > 50) { 
        menuItem.classList.add("scrolled");
    } else {
        menuItem.classList.remove("scrolled");
    }
});



document.querySelectorAll('.menu_item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, 
                behavior: 'smooth' 
            });
        }
    });
});



  


window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".overlay").classList.add("fade-out");
    }, 1000); 
});


document.querySelectorAll('.about_more').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
    });
});
