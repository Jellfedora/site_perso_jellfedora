var app = {

  init: function () {

    console.log('app.init');


    // Je créé mes variables pour cibler mes éléments + facilement
    

    //Effet sur lelement precedent quand on tape dans l'input
    //Repetition à cause de contact form 7, .prev ne fonctionne pas^^ A corriger!
    $('.effect-name').on('keypress', app.showHoverEffectName);
    $('.effect-email').on('keypress', app.showHoverEffectEmail);
    $('.effect-message').on('keypress', app.showHoverEffectMessage);

    //Smoothscroll

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

  showHoverEffectName: function () {
    $('.form-name',).css('color', "green");
    if (($('.effect-name')) && ($('.effect-email')) && ($('.effect-message')).val('')) {
      console.log('coucou name');
      $('.contact-submit').addClass('show-contact-submit');
    };
    
  },

  showHoverEffectEmail: function () {
    $('.form-email').css('color', "green");
    if (($('.effect-name')) && ($('.effect-email')) && ($('.effect-message')).val('')) {
      console.log('coucou name');
      $('.contact-submit').addClass('show-contact-submit');
    };
  },

  showHoverEffectMessage: function () {
    $('.form-message').css('color', "green");
    if ( (($('.effect-name')) && ($('.effect-email')) && ($('.effect-message')) ).val('')) {
      console.log('coucou name');
      $('.contact-submit').addClass('show-contact-submit');
    };
  },

  showContactSubmit: function () {
    console.log('contact-submit');
    $('.contact-submit').addClass('show-contact-submit');
    
  },
  


  
}

$(app.init);







