$(document).ready(function($) {
    $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();

        // Get the current target hash
        var target = this.hash;

        // Animate the scroll bar action so its smooth instead of a hard jump
        $('html, body').stop().animate({
            'scrollTop' : $(target).offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});










// $(document).ready(function(){
//   // Add smooth scrolling to all links in navbar + footer link
//   $("a").on('click', function(event) {
//
//   // Prevent default anchor click behavior
//   event.preventDefault();
//
//   // Store hash
//   var hash = this.hash;
//
//   // Using jQuery's animate() method to add smooth page scroll
//   // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//   $('html, body').animate({
//      scrollTop: $(hash).offset().top
//   }, 900, function(){
//
//     // Add hash (#) to URL when done scrolling (default click behavior)
//      window.location.hash = hash;
//     });
//   });
//   $('[data-toggle="tooltip"]').tooltip();
//
// });
