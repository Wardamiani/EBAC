$(document).ready(function () {  
  let titulos = $("h2");

  let itens = $(".featured-item");

  let destaques = $("#featured");

  $(".featured-item a").addClass("btn btn-dark stretch-link");

  $(".featured-item a").on("click", function (event) {
    event.preventDefault();
    alert("Ótima escolha!");
  });

  $(".featured-item:first h2").append(
    '<span class="badge rounded-pill bg-danger">Novo</span>'
  );

  $(".nav-modal-open").on("click", function (e) {
    e.preventDefault();
    let elem = $(this).attr("rel");
    $(".modal-body").html($("#" + elem).html()); //#sobre

    let myModal = new bootstrap.Modal($("#modalId"));
    myModal.show();
  });

  $('.body').on('submit', '.modal-body .form', function(e){
    e.preventDefault()
    const inputName = $('#nome')
    const inputeEmail = $('#email')

    if(inputName.val() == '') {
      console.log('O campo obrigatório está vazio')

      $('#inputName').addClass('Invalid');
      return false
    }
  });


 $("#form-submit").on("click", function (e) {
    e.preventDefault();

    if ($("#email").val() != "") {
      $("#email").animate(
        {
          opacity: "toggle",
          top: "-50",
        },
        500,
        function () {
          console.log($(this).val());
        }
      );
    }
  })

  $("#form-submit").ready(function(){  
   $("#form-submit").click(function(){
      $("#form-submit").prop("value", "Input New Text");
      $("#form-submit").html("Obrigado");
      $("#form-submit").prop('disabled', true)      
   })      
});

  /*
   *Validação de formulário
   */

  function validate(elem) {
    if (elem.val() == "") {
      console.log("O campo de " + elem.attr("name") + " é obrigatório");
      elem.parent().find(".text-muted").show();
      elem.addClass("invalid");

      return false;
    } else {
      elem.parent().find(".text-muted").hide();
      elem.removeClass("invalid");
    }
  }

  $("body").on("submit", ".modal-body .form", function (e) {
    e.preventDefault();
    const inputName = $("#nome");
    const inputEmail = $("#email");

    validate(inputName);
    validate(inputEmail);

    if (inputEmail.hasClass("invalid") || inputName.hasClass("invalid")) {
      console.log("Verificar campos obrigatórios");
      return false;
    } else {
      $(this).submit();
    }
  });

  $("body").on("blur", "#nome", function () {
    validate($(this));
  });
  
  $("body").on("blur", "#email", function () {
    validate($(this));
  });

  $('body').on('focus', '#data', function() {
    $(this).datepicker()
  })
  
  $("body").on("blur", "#data", function () {
    validate($(this));
    $(this).mask("00/00/0000");
  });

  $("body").on("blur", "#hora", function () {
    validate($(this));
    $(this).mask("00:00");
  });

  $("body").on("blur", "#cep", function () {
    validate($(this));
    $(this).mask("00000-000");
  });

  $("body").on("blur", "#cel", function () {
    validate($(this));
    $(this).mask("00000-0000");
  });

  $("body").on("blur ", "#cpf", function () {
    validate($(this));
    $(this).mask("000.000.000-00");
  });


// carrossel stagePadding

$('.owl-carousel').owlCarousel({
  center: true,  
  stagePadding: 50,
  loop: true,
  margin: 50,  
  nav: true, 
  autoWidth:true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,      
    },
    600: {
      items: 2,      
    },
    1000: {
      items: 3,      
    },
  }

})

});
