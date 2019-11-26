var imagesToBeClicked = document.getElementsByClassName("img-class");


for(var i = 0, max = imagesToBeClicked.length; i < max; i += 1) {
  var clickedImg = imagesToBeClicked[i];
    clickedImg.onclick=function (){
    createImg(this);
  };
}

function  createImg(element){
   var img = document.createElement('IMG');
   var anchor = img.id = "jump";
   var imgSrc = img.src = element.src;
   img.classList.add("expand");
   var x = document.createElement('IMG');
   xSrc = x.src = 'images/x.png';
   x.classList.add('x-style');
   document.getElementById('pop-up-img').appendChild(img);
   document.getElementById('pop-up-img').appendChild(x);

   x.onclick = function(){
   	var popUpDiv = document.getElementById('pop-up-img');
   	popUpDiv.removeChild(img);
   	popUpDiv.removeChild(x);
   }
}


