$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  center: true,  
  stagePadding: 50,
  loop: true,
  margin: 10,  
  nav: true, 
  autoWidth:true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,      
    },
    600: {
      items: 3,       
    },
    1000: {
      items: 3, 
      responsiveBaseElement:".myCustomWrapper",      
    },
  }

})
  });

import img from '../assets/imgfundo.jpg';
import '../scss/styles.scss'

module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpeg|gif|jpg)$/i,
          use: [
            {
              loader: 'file-loader',
              include: path.join(__dirname, 'src')
            },
          ],
        },
      ],
    },
  };

  