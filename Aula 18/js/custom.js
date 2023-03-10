$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

let titulos = $('h2')

let itens = $('.featured-item')

let destaques = $('#featured')

$('.featured-item a').addClass('btn btn-dark stretch-link');

$('.featured-item a').on('click', function(event){

    event.preventDefault();
    alert('Produto esgotado');
})

$('.featured-item:first h2').append ('<span class="badge bg-secondary">Novo</span>');

// $('featured-item: h4').click ( function(){
//     $(this).css({
//         'color': "#ff0",
//         "font-weight": "100",
//     })

});
