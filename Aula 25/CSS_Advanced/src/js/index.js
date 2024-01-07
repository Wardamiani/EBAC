import '../scss/styles.scss'
import imageQuebec from '../assets/quebec.jpg'
// import imageNotebook from '../assets/notebook.jpg'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

const elemImageQuebec = new Image()
elemImageQuebec.src = imageQuebec

document.querySelector('#quebec')
.appendChild(elemImageQuebec)