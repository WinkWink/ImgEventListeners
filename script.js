var imagesToBeClicked = document.getElementsByClassName("img-class");


for(var i = 0, max = imagesToBeClicked.length; i < max; i += 1) {
  var clickedImg = imagesToBeClicked[i];
  clickedImg.onclick=function (){
    toggleClass(this);
  };
}

function  toggleClass(element){
  element.classList.toggle("expand-img"); 
}