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
       const scrolled = Math.round(window.pageYOffset);
       const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      
    function opacTheme(){
    if(scrolled >= 12 ){
    navTransparent.style.opacity = "1";
     console.log(scrollable);
    }
    };
   
});
/*
// Click a random element
document.getElementById('Fall').click();
// Play video after click
setTimeout(function(){
    document.getElementById('winter-background-video').play();
}, 1500);
setTimeout();

//Another method used to try and get the background image to autoplay
var backgroundvideo = document.getElementById('winter-background-video');
navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
    
    backgroundvideo.play(); // play your media here
    //document.getElementById('winter-background-video').play();

    // stop microphone stream acquired by getUserMedia
    stream.getTracks().forEach(function (track) { track.stop(); });
});
*/
//window.onscroll=opacTheme();

//window.pageYOffset === window.scrollY; // always true
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
