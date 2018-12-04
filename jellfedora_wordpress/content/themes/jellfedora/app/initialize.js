var app = {

  init: function () {

    console.log('app.init');


    // CONTACT
    // Effect on the previous element 

    // Repetition à cause de contact form 7, .prev ne fonctionne pas^^ A corriger!
    $('.effect-name').on('keypress', app.greenColorInputName);
    $('.effect-email').on('keypress', app.greenColorInputEmail);
    $('.effect-message').on('keypress', app.greenColorTextareaMessage);

    // SMOOTHSCROLL
    // Smoothscroll to different sections

    $('.go-to-header').click(function () {
      $('html,body').animate({
        scrollTop: $('#header').offset().top
      },
        'slow');
    });

    $('.go-to-skills').click(function () {
      $('html,body').animate({
          scrollTop: $('#skills').offset().top
        },
        'slow');
    });

    $('.go-to-portfolio').click(function () {
      $('html,body').animate({
        scrollTop: $('#portfolio').offset().top
      },
        'slow');
    });

    $('.go-to-contact').click(function () {
      $('html,body').animate({
        scrollTop: $('#contact').offset().top
      },
        'slow');
    });
  },

  // Grenn color when the Contact input/textarea is informed
  greenColorInputName: function () {
    $('.form-name').css('color', "green");
  },
  greenColorInputEmail: function () {
    $('.form-email').css('color', "green");
  },
  greenColorTextareaMessage: function () {
    $('.form-message').css('color', "green");
  },
}

$(app.init);







