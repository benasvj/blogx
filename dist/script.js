const html ={
  backward:document.querySelector(".fa-chevron-left"),
  forward:document.querySelector(".fa-chevron-right"),
  home:document.querySelector(".main-image"),
  testimonials:document.querySelector(".testimonials"),
  risingNr:document.querySelectorAll("h3"),
  btn:document.querySelector(".fa-bars"),
  menu:document.querySelector(".navigation-menu .container")
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
var testNr = []; //cia saugosim pradines reiksmes
for(x=0; x<html.risingNr.length; x++){
  testNr.push(parseFloat(html.risingNr[x].textContent));
  html.risingNr[x].textContent="0";
}

console.log(testNr);

var stop=0; //kad antra kart uzscrolinus nebedarytu
document.addEventListener("scroll", function(){
  if(window.scrollY+window.innerHeight*0.8>html.testimonials.offsetTop && stop==0){
    count=0;
    count2=0;
    stop=1;  //kad antra kart uzscrolinus nebedarytu
    rise = setInterval(()=>{
      count=count+10;
      html.risingNr[0].textContent=count;
      html.risingNr[2].textContent=count;
      html.risingNr[3].textContent=count;
      if(count>=testNr[0]){
        clearInterval(rise);                
        stop=1;
        html.risingNr[0].textContent=testNr[0];
        html.risingNr[2].textContent=testNr[2];
        html.risingNr[3].textContent=testNr[3];
      }
    },50);
    rise2 = setInterval(()=>{
      count2=count2+2;
      html.risingNr[1].textContent=count2;
      if(count2>=testNr[1]){
        clearInterval(rise2);
        html.risingNr[1].textContent=testNr[1];
      }
    },50);
  }
});

html.btn.addEventListener("click",function(){
  html.menu.classList.toggle("active-menu")
});