//document.querySelector("h4").style.color="green";

/*const baliseHtml = document.querySelector("h4");

console.log(baliseHtml);

baliseHtml.style.color="green";*/

//Click event

const qContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

qContainer.addEventListener("click", ()=>{
 qContainer.classList.toggle("question-click")
});

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
});
btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
});


//----------------------------------------------------------------

// mouse  Events

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
   mousemove.style.left = e.pageX + "px";
   mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
    mousemove.style.border = "3px solid yellow";
})

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid red";
})

qContainer.addEventListener("mouseenter", () => {
    qContainer.style.background = "rgba(0,0,0,0.6)";
})

qContainer.addEventListener("mouseout", () => {
    qContainer.style.background = "pink";
})

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
})

//--------------------------------------------

// keyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener('keypress', (e) => {
   console.log(e);
})
