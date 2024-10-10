import '../styles/style.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import $ from 'jquery';
import imageMockup1 from '../assets/images/mockup1.jpg';
let imgTag = document.querySelector(".mockup1");
if (imgTag) {
    imgTag.src = `${imageMockup1}`;
    imgTag.alt = "Imagem mini-banner CTA";
    imgTag.style.maxWidth = "500px";
}
const importImages = require.context('../assets/images', false, /\.jpg$/);
const images = [];
for (let i = 1; i <= 6; i++) {
    images.push(importImages(`./img${i}.jpg`));
}
const imgsTag = Array.from(document.querySelectorAll(".IMGtag"));
imgsTag.forEach((Img, index) => {
    Img.src = images[index];
    Img.style.width = "100%";
});
import Bianchini from '../assets/images/bianchini.png';
import Rancho from '../assets/images/rancho.png';
import Hoepcke from '../assets/images/hoepcke.png';
import Monguillhot from '../assets/images/monguilhott.png';
const arrayLogoParceiros = [Bianchini, Rancho, Hoepcke, Monguillhot];
const logosEmpresasParceiras = Array.from(document.querySelectorAll(".logo-empresas-clientes"));
for (let i = 0; i < arrayLogoParceiros.length; i++) {
    logosEmpresasParceiras[i].src = arrayLogoParceiros[i];
}
document.addEventListener("DOMContentLoaded", () => {
    $('.Humburguer_icon').on('click', function (e) {
        e.stopPropagation();
        $('.nav-mobile').parent().find('ul').toggle(1000);
    });
});
