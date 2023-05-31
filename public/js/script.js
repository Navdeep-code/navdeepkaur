//toggle icon navbar
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    //menuIcon.classList.toggle('bx-menu');
    navbar.classList.toggle('active');
}

//scroll sections
var section = document.querySelectorAll('section');
var navlink = document.querySelectorAll('header nav a');



// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navlink.length; i++) {
    navlink[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    });
}

window.onscroll = () => {
    //sticky header
    var header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

}
