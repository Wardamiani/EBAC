

const video = document.querySelector('#video')
const button = document.querySelector('#btn-play')

document.querySelector('.fa-pause').style.display = 'none'

const play = (event) => {
    if(video.paused) {
        document.querySelector('.fa-play').style.display = 'none'
        document.querySelector('.fa-pause').style.display = 'block'
        video.play()
    } else {
        document.querySelector('.fa-play').style.display = 'block'
        document.querySelector('.fa-pause').style.display = 'none'
        video.pause()
    }
}

button.addEventListener('click', (event) => {
    play(event)
})

video.addEventListener('click', (event) => {
    play(event)
})

video.addEventListener('timeupdate', () => {
    let current = (video.currentTime / video.duration) * 100
    if(video.ended) {
        document.querySelector('.fa-play').style.display = 'block'
        document.querySelector('.fa-pause').style.display = 'none'
    }
    document.querySelector('.inner').style.width = `${current}%`
});


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
