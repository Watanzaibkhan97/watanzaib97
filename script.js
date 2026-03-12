// landing button

const exploreBtn=document.querySelector(".explore-btn")

exploreBtn.addEventListener("click",function(){

document.getElementById("landing-screen").style.display="none"

document.getElementById("main-content").classList.add("visible")

})



// typing animation

const text="Hi, I'm Watanzaib Khan"

let i=0

function typing(){

if(i<text.length){

document.querySelector(".typing-text").innerHTML+=text.charAt(i)

i++

setTimeout(typing,80)

}

}

typing()