var imgSet = document.getElementsByClassName('img');
    dotSet = document.getElementsByClassName('dot');

var pre = document.getElementById('previous');
    next = document.getElementById('next');

// 剛打開頁面時先讓0圖層顯示三秒了  所以index直接設成1
var index = 1;
var t = setTimeout(showSlides, 3000);

// set z-index for each img
for(var i=0; i<imgSet.length; i++){
  imgSet[i].style.zIndex = 50 - imgSet[i].attributes["data-index"].value;
}

function showSlides(){
  //hide all img first
  hideAll();

  imgSet[index].classList.add("show");
  dotSet[index].classList.add("show");

  if(index != imgSet.length-1){
    index++;
  } else{
    index = 0;
  }
  // 再次呼叫timeout
  t = setTimeout(showSlides, 3000);
}

function hideAll(){
  for(var i=0; i < imgSet.length; i++){
    imgSet[i].classList.remove('show');
    dotSet[i].classList.remove('show');
  }
}

// dot clicked event
for(var i=0; i<dotSet.length; i++){
  dotSet[i].addEventListener("click", dotSelect);
}

function dotSelect(){
  // 先停止原先正在執行的timeout
  clearTimeout(t);
  //hide all img first
  hideAll();

  index = this.attributes["data-index"].value;
  showSlides();
}

// arrow clicked event
pre.addEventListener("click", preSelect);
next.addEventListener("click", nextSelect);

function preSelect(){
  // 先停止原先正在執行的timeout
  clearTimeout(t);
  //hide all img first
  hideAll();

  if(index == 0){
    index = imgSet.length-2;
  } else if(index == 1){
    index = imgSet.length-1;
  } else{
    index = index - 2;
  }

  showSlides();
}

function nextSelect(){
  // 先停止原先正在執行的timeout
  clearTimeout(t);
  //hide all img first
  hideAll();

  showSlides();
}
