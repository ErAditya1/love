
var loader = document.getElementById("preloader");

window.addEventListener("DOMContentLoaded", function () {
//   loader.style = "display:none";
  console.log("Dom content loaded loaded");
});

window.addEventListener("load", function () {
  loader.style.display = "none";
  setInterval(()=>{
    heartGenerator()
  },200)
  console.log("Page is completly loaded");
});

  var typed = new Typed(".logo-auto-input", {
    strings: ["Dear ❝love❞ ❤️💞", "My love 💞💓", "I love You 💕💕💖"],
    typeSpeed: 150,
    Delay: 5000,
    loop: true
  })
  var typed = new Typed(".loading", {
    strings: ["" , "Loading..."],
    typeSpeed: 100,
    Delay: 5000,
    loop: true
  })

 
  document.addEventListener("mousemove", function(e){
    
    let heartAnimation = document.querySelector('.heartAnimation')
    
    let heart = document.createElement('span')
    
    let x= e.offsetX;
    let y= e.offsetY;
    heart.style.left = x+"px";
    heart.style.top = y+"px";

    let size = Math.random() *80;
    heart.style.width = 20+size + 'px';
    heart.style.height = 20+size + 'px';

    let transFormValue = Math.random()*360
    heart.style.transform = 'rotate(' + transFormValue + 'deg)';

    heartAnimation.appendChild(heart);
    setTimeout(function(){
      heart.remove();
    }, 700);
  }

  )
 
 const heartGenerator = ()=> {
  
    
  let heartAnimation = document.querySelector('.heartAnimation')
  
  let heart = document.createElement('span')
  
  

  heart.style.left = (Math.random()*90+1)+"vw";
  heart.style.top = (Math.random()*90+1)+"vh";

  let size = Math.random() *80;
  heart.style.width = '90px';
  heart.style.height ='90px';

  let transFormValue = Math.random()*360
  heart.style.transform = 'rotate(' + transFormValue + 'deg)';

  heartAnimation.appendChild(heart);
  setTimeout(function(){
    heart.remove();
  }, 1500);

}

  