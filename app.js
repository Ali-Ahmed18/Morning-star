const {innerHeight} = window;
const height = document.getElementById("zoom-in")
gsap.to("#zoom-in", {
    scale: 1.8, stagger: 0.25, duration: 3,
    scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
});



gsap.set("#zoom-in", { filter: "blur(0px)" ,opacity :"1"});

// *******************************************************************
var lastScrollTop = 0;
window.addEventListener("scroll", function(e){ 
    const totalHeight = document.body.offsetHeight - 657
    const currentHeight = window.pageYOffset
    let circleText = document.getElementById("circleText")
    let percentage = Math.floor((currentHeight / totalHeight) * 100)
    let circle = document.querySelector(".circle")
    circle.setAttribute("stroke-dasharray",`${percentage}, 100`)
    if(percentage == 100){
        circleText.innerHTML = `<a href="#top">Back To<br>Top &uarr;</a>`
    }else{
        circleText.innerHTML = `scroll<br>To Explore`
    }





    const {scrollY} = window;    
    let opacity =( 1 - (scrollY / height.offsetHeight).toFixed(1))
    let calc  = ((scrollY * 10) / height.offsetHeight).toFixed(1)
gsap.to("#zoom-in", {
    
  filter: `blur(${calc}px)`,
  opacity: `${opacity}`,
  scrollTrigger: {
    trigger: "#zoom-in",
    start: "top",
    end: "bottom bottom",
    scrub: true,
  }
  
})
    
    let logo = document.querySelector(".logo")
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop) {
      logo.style.width = "50px";
      logo.style.transition = "width 1s ease"
      logo.style.transform = "translateX(-10px)";
   } else if (st < lastScrollTop) {
      logo.style.width = "150px"
      this.setTimeout(()=>{
        logo.style.transition = "transform .3s ease";
        logo.style.transform = "translateX(0px)";
      },1000)
      
   } 
   lastScrollTop = st <= 0 ? 0 : st; 
}, false);
// *******************************************************************



// *******************************************************************
const toggleMenu = document.getElementById("toggle-menu")
toggleMenu.addEventListener("click",function(e){
    let line1 = document.querySelector(".l1")
    let line2 = document.querySelector(".l2")
    let line3 = document.querySelector(".l3")
    e.currentTarget.classList.toggle("open")
    if(e.currentTarget.classList.contains("open")){
        line1.style.transform = "translate3d(0px, 0.36em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)";
        line1.style.transformStyle = "preserve-3d";
        line2.style.transform = "translate3d(0.3em, 0px, 0px) translateX(-4px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)";
        line2.style.transformStyle = "preserve-3d";
        line3.style.transform = "translate3d(-0.3em, 0.05em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)";
        line3.style.transformStyle = "preserve-3d";
    }else{
        line1.style.transform = "";
        line1.style.transformStyle = "";
        line2.style.transform = "translateX(-10px)";
        line2.style.transformStyle = "";
        line3.style.transform = "";
        line3.style.transformStyle = "";
    }
   

})



// *******************************************************************

// ************Hover on Product****************
const productLabels = document.querySelectorAll(".productLabels")
productLabels.forEach((element)=>{
    element.addEventListener("mouseover",mousein);
    element.addEventListener("mouseout",mouseout);
})

function mousein(e){
    let element = e.currentTarget 
    let product = element.querySelector(".product")
    product.style.backgroundColor = "#1b46c2"
    element.querySelector(".product-circle").style.backgroundColor = "#1b46c2"
}
function mouseout(e){
    let element = e.currentTarget 
    let product = element.querySelector(".product")
    product.style.backgroundColor = "#fff"
    element.querySelector(".product-circle").style.backgroundColor = "#fff"
}