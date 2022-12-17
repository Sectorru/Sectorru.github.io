let link = document.getElementById("theme_link");
let backgroundImg = document.querySelector('.main_box');
let currentBackArr = ["styles/anime1.css", "styles/anime2.css", "styles/anime3.css", "styles/anime4.css", "styles/anime5.css"];
let currentColumn = 0;

let carousel = document.querySelector('.carusel');
let caruselItem = document.querySelectorAll('.carusel_single').length - 1; //skolko kartinok vsego
    let width = 1360; //size kartinki
    let count = 1;  //na skolko img prokrutka
    let list = carousel.querySelector('.carusel_list');
    let listElems = carousel.querySelectorAll('.carusel_single');
    let position = 0;

    document.querySelector('.item_prev').onclick = function() {
      if(position == 0){
        currentColumn = caruselItem;
        position = -width * caruselItem;
        list.style.marginLeft = position + 'px';
      }
      else{
        --currentColumn;
        position += width * count;
        position = Math.min(position, 0);
        list.style.marginLeft = position + 'px';
      }
      swapBack(currentBackArr[currentColumn]);
    };

    document.querySelector('.item_next').onclick = function() {
      if(position == -(width * caruselItem)){
        currentColumn = 0;
        position = 0;
        list.style.marginLeft = position + 'px';
      }
      else{
        ++currentColumn;
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';

      }
      swapBack(currentBackArr[currentColumn]);
    };

    function swapBack(currentBack){
      link.setAttribute("href", currentBack);
    }