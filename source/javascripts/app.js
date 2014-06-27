var CS = (function() {

  var $ = jQuery;

  return {

    init: function() {
      this.setFoundation();
      this.setJS();
      this.setMenuEvents();
      this.setPageScroll();
    },

    setFoundation: function() {
      $(document).foundation();
    },

    setJS: function() {
      $('body').addClass('js');
    },

    setMenuEvents: function() {

    },

    setPageScroll: function() {
      // Add click event with animated scroll
      $('ul.scroll a').on('click', function(e){
        e.preventDefault();

        var speed = 400,
           anchor = $(this).attr('href');
           loc = $(anchor).offset().top;

        $('body').animate( { scrollTop: loc }, speed );
      });
    }

  };
} () );

jQuery(document).ready(function() {
  CS.init();
});

