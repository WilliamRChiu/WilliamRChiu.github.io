window.addEventListener('scroll', function() {
    var logo = document.getElementById('logo');
    var dropdownIcon = document.getElementById('dropdown-icon-permanent');
    var navItems = document.querySelector('.navigation');

    if (window.scrollY > 40) {
        navItems.style.display = 'none';
        logo.style.display='none';
        dropdownIcon.style.display = 'block';
        
    } else {
        navItems.style.display = 'flex';
        logo.style.display='flex';
        dropdownIcon.style.display = 'none';
    }
});

let moon = document.getElementById("moon");
let middleground = document.getElementById("middleground");
let foreground = document.getElementById("foreground");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    const imageContainer = document.querySelector('.transition_background2');
    const rect =imageContainer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    if (rect.top <= viewportHeight / 4 && rect.bottom >= viewportHeight / 4) {
        // Image is in the center of the viewport
        moon.style.top = value*0.25-viewportHeight/2 +'px';
        console.log("yes");
        middleground.style.top = 70+value*0.2 - viewportHeight/2 +'px';
    } 

    else {
        // Image is not in the center of the viewport
        moon.style.transform = 'translateY(200)'; // or any other initial position
        console.log("no");
        middleground.style.transform = 'translateY(110)';
    }
})