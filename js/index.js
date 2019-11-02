// Your code goes here
let logoHeading = document.querySelector(".logo-heading");
let navLinks = document.querySelectorAll(".nav-link");
let introImg = document.querySelector(".intro img");
const section = document.querySelectorAll("section");
const headerh1 = document.querySelector(".intro h2");
const buttons = document.querySelectorAll(".btn");
const sectionImgs = document.querySelectorAll(".img-content");
const destImg = document.querySelector(".content-destination img");


// console.log(headerh1);




window.addEventListener("load", () =>{
    logoHeading.textContent = "Sub Nuf";
});



introImg.addEventListener("mouseover", () =>{
    introImg.removeAttribute("style")
    introImg.style.transform = "rotate(180deg)";
});

introImg.addEventListener("mouseout", () =>{
    introImg.style.transform = "rotate(0deg)";
});


let colors = ["blue","red", "orange", "green", "yellow"];

window.addEventListener("scroll",(e) => {
    // console.log(window.scrollY)

    let posSet = Math.ceil(window.scrollY/200);
    let ran = Math.floor(Math.random()*5);
    console.log(ran);
    // console.log(posSet);
    section.forEach(sec => {
        sec.style.backgroundColor = colors[ran];
    })
});


document.addEventListener("keydown", (e)=>{
    headerh1.style.textAlign = "right";
    console.log(e)
});





sectionImgs.forEach(sec => {
    // console.log(sec);
    sec.addEventListener("dblclick", ()=> {
        sec.classList.toggle("hide")
    });

});


console.log(destImg);

