// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

})

})

})



// skill animation

const skills=document.querySelectorAll(".progress")

window.addEventListener("scroll",()=>{

skills.forEach(skill=>{

let position=skill.getBoundingClientRect().top

let screen=window.innerHeight

if(position<screen){

skill.style.width=skill.dataset.width

}

})

})



// gallery lightbox

const images=document.querySelectorAll(".gallery-img")

const lightbox=document.getElementById("lightbox")

const lightboxImg=document.getElementById("lightbox-img")

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex"

lightboxImg.src=img.src

})

})

lightbox.addEventListener("click",()=>{

lightbox.style.display="none"

})