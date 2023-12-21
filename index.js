"use strict"
let body=document.body;
let container=document.querySelector(".container")
let Dark_btn=document.querySelector(".Dark_btn");
let h3_content=document.querySelectorAll("#h3");
// console.log(h3_content);
let p=document.getElementsByTagName("p");

Dark_btn.addEventListener("click",()=>{

    container.classList.toggle("container_style");

body.classList.toggle("body_color");

Dark_btn.classList.toggle("Light_btn");

     if(Dark_btn.innerText=="Dark Mode"){
        Dark_btn.innerText="Light Mode"
     }
     else{
        Dark_btn.innerText="Dark Mode"
     }

h3_content.forEach((text)=>{
text.classList.toggle("h3_color");
})


});