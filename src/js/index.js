import '../styles/style.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import * as bootstrap from 'bootstrap';

//Image mini-banner insertion into HTML
import imageMockup1 from '../assets/images/mockup1.jpg'
let imgTag = document.querySelector(".mockup1");
imgTag.src = `${imageMockup1}`;
imgTag.alt = "Imagem mini-banner CTA";
imgTag.style.maxWidth = "500px";





$(document).ready(function () {
    // Usado para criar efeitos
});