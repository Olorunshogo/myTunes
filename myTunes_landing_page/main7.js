// Responsive Navigation Bar
$(function () {
  menu = $("nav ul");

  $("#openup").on("click", function (e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function (e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});


function ello() {
  alert('This ')
}

// Smooth Scrolling
// It will run this function anytime an a tag in .nav is clicked
$('.nav a').on('click', function(event) {
  // Check the hash (#music for example) for wherever it's moving to
  if (this.hash !== ''){
    event.preventDefault();

    const hash = this.hash;

    // It's going to call the animate method
    $('html, body').animate(
      {
        // It'll pass in a property of scrollTop and the hash variable.offset().top
        scrollTop: $(hash).offset().top
      },
      800, // Speed in millisecond(s)
      // Set the window location to whatever the variable is.
      function(){
        window.location.hash = hash;
      }
    );
  }
});
  