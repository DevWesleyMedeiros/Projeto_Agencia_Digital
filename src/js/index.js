import '../styles/style.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import * as bootstrap from 'bootstrap';
import $ from 'jquery';
import myImage from '../assets/images/img1.jpg';

const img = document.createElement('img');
img.src = myImage;
document.body.appendChild(img);

$(document).ready(function () {
    alert("Olá, mundo");
});