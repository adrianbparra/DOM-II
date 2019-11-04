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

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
    });
})


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
    // console.log(ran);
    // console.log(posSet);
    section.forEach(sec => {
        sec.style.backgroundColor = colors[ran];
    })
});


document.addEventListener("keydown", (e)=>{
    
    // console.log(e);
    if(e.key == "c"){
        headerh1.style.textAlign = "center";
    }
    if(e.key == "r"){
        headerh1.style.textAlign = "right";
    } 
    if(e.key == "l"){
        headerh1.style.textAlign = "left";
    } 
    
    ///Was trying to do an change if any key was pressed it will cycle over each text
    //align position.
    
});





sectionImgs.forEach(sec => {
    // console.log(sec);
    sec.addEventListener("dblclick", ()=> {
        sec.classList.toggle("hide")
    });

});


// console.log(destImg);

let rotation = 0;
destImg.addEventListener("wheel", (e) => {
    // console.log(e.deltaY);

    if(e.deltaY == -100){
        destImg.style.transform = `rotate(${rotation}deg)`;
        rotation++;
    } else {
        destImg.style.transform = `rotate(${rotation}deg)`;
        rotation--;
    }

    if (rotation >= 360 || rotation <= -360){
        rotation = 0;
    }
    e.preventDefault();
});


window.addEventListener("drag", (e)=>{
    console.log(e);
})