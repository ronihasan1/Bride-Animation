const slider  = document.querySelectorAll(".slider img") ;
let count = 0 ;

function changeImage(){
    slider[count].classList.remove('active') ;
    count = (count + 1 ) % slider.length ;
    slider[count].classList.add('active') ;
}
setInterval(changeImage, 3000) ;