window.addEventListener("scroll",() =>{
const navbar=document.getElementById("navbar")
if (window.scrollY>100) {
navbar.classList.remove("opacity-0","pointer-events-none")
navbar.classList.add("opacity-100")
}else{
  navbar.classList.remove("opacity-100")
  navbar.classList.add("opacity-0","pointer-events-none")
}
})
// // 

// document.getElementById("next").addEventListener("click",() =>{
//   carousel.scrollBy({left:carousel.offsetWidth , behavior:"smooth"})
// })
// document.getElementById("prev").addEventListener("click",() =>{
//   carousel.scrollBy({left:-carousel.offsetWidth,behavior:"smooth"})
// })
// 
let carousel=document.getElementById("carousel");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

if (nextBtn && carousel) {
  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({left: carousel.offsetWidth, behavior: "smooth"})
  });
}
if (prevBtn && carousel) {
  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({left: -carousel.offsetWidth, behavior: "smooth"})
  });
}
