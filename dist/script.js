const html ={
  backward:document.querySelector(".fa-chevron-left"),
  forward:document.querySelector(".fa-chevron-right"),
  home:document.querySelector(".main-image"),
  testimonials:document.querySelector(".testimonials"),
  risingNr:document.querySelector("h3"),
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

//kilantiems skaiciams testimonials
var testNr = parseFloat(html.risingNr.textContent);  //issaugota pirmine reiksme
console.log(testNr);
html.risingNr.textContent="0";


var stop=0;
document.addEventListener("scroll", function(){
  if(window.scrollY+window.innerHeight*0.7>html.testimonials.offsetTop && stop==0){
    count=0;
    stop=1;
    rise = setInterval(()=>{
      count=count+10;
      html.risingNr.textContent=count;
      if(count>=testNr){
        clearInterval(rise);
        stop=1;
        html.risingNr.textContent=testNr;
      }
    },100);
  }
});