<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <title>VISITE QUEBEC</title>
</head>
<body>
    <div id="background-img">
    <section class="container-navbar">
        <a href="">DESTINO</a>
        <a href="">PACOTES</a>
        <a href="">CONTATO</a>
        <a href="">SOBRE</a>    
    </section> 
    <div class="imagebox" id="quebec"></div>
    <img src="./assets/quebec.jpg" alt="d">
    </div>
</body>




import '../scss/styles.scss'
import imageQuebec from '../assets/quebec.jpg'
// import imageNotebook from '../assets/notebook.jpg'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

const elemImageQuebec = new Image()
elemImageQuebec.src = imageQuebec

// const elemImageNotebook = new Image()
// elemImageNotebook.src = imageNotebook


document.querySelector('#quebec')
    .appendChild(elemImageQuebec)

// document.querySelector('#notebook')
//    .appendChild(elemImageNotebook)