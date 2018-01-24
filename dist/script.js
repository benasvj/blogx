const html ={
  backward:document.querySelector(".fa-chevron-left"),
  forward:document.querySelector(".fa-chevron-right"),
  home:document.querySelector("section.main-image")
}


var current = 0;
var photos=["img/index/background1.jpeg", "img/index/background2.jpeg", "img/index/background3.jpeg"]


html.forward.addEventListener('click', function () {
  html.home.style.backgroundImage=`url(${photos[current]}`;
  current++;
  if(!photos[current]) current=0;
});

html.backward.addEventListener("click", function () {
  html.home.style.backgroundImage=`url(${photos[current]})`;
  current--;
  if(current<0) current=photos.length-1;
})