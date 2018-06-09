var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var image = document.querySelectorAll('#gallery img');
var i = 0;


prev.onclick = function () {
    image[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = image.length - 1;
    }
    image[i].style.display = 'block';

}

next.onclick = function () {
    image[i].style.display = 'none';
    i++;
    if (i >= image.length) {
        i = 0;
    }
    image[i].style.display = 'block';

}