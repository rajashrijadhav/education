$(document).ready(function(){
    $('.informal-slider').slick({
        // accessibility: false,
       
        //appendArrows: '.header',
        //prevArrow: '.button-prev',
       // nextArrow: '.button-next',

       
       arrows: false,
       dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    $('.education-slider').slick({
      // accessibility: false,
     
      //appendArrows: '.header',
      //prevArrow: '.button-prev',
     // nextArrow: '.button-next',

     
     arrows: true,
     prevArrow: '.main-slider-pagenation .button-prev',
    nextArrow: '.main-slider-pagenation .button-next',
     dots: false,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1
  });

    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  jQuery ('.menu-btn').on ('click',function(){
    jQuery ('.header-navbar .navigation').slideToggle(); 
});
    
  });

  $(document).ready(function() {

    // Gets the video src from the data-src on each button
    
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    
      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
      
    
    
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
        
        
    
    
      
      
    // document ready  
    });

  