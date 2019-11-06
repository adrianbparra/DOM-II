// Your code goes here
let logoHeading = document.querySelector(".logo-heading");
let navContainer = document.querySelector(".nav-container");
let navLinks = document.querySelectorAll(".nav-link");
let introImg = document.querySelector(".intro img");
const para = document.querySelectorAll("p");
const headerh1 = document.querySelector(".intro h2");
const buttons = document.querySelectorAll(".btn");
const sectionImgs = document.querySelectorAll(".img-content");
const destImg = document.querySelector(".content-destination img");
const dest = document.querySelectorAll(".destination");
// console.log(headerh1);

navContainer.addEventListener("click", () =>{
    logoHeading.textContent = "Fun Bus";
})
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        //prevents from opening link.
        e.preventDefault();
        //prevent action from event of click on the navContainer.
        e.stopPropagation();
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
    para.forEach(p => {
        p.style.backgroundColor = colors[ran];
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

buttons.forEach(button => {
    button.addEventListener("mouseleave", () => {
        alert("Wait, you have to press it.")
    })
});

console.log(dest);

dest.forEach(sec => {
    
    sec.addEventListener("drag", ()=>{
    console.log(sec);
    });
});