   // Activate Bootstrap scrollspy on the main nav element
   /*
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
     */

window.addEventListener('scroll', () => {
    var navTransparent = document.getElementById('mainNav');
       const scrolled = window.scrollY;
       const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      
    function opacTheme(){
    if(scrolled >= 12 ){
    navTransparent.style.opacity = "1";
     console.log(scrollable);
    }
    };
   
});
//window.onscroll=opacTheme();
/*
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

$('#mainNav').css({
  opacity: function() {
    var elementHeight = $(this).height(),
        opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;

    return opacity;
  }
})
});
*/
