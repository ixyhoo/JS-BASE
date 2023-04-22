//document.querySelector("h4").style.color="green";

/*const baliseHtml = document.querySelector("h4");

console.log(baliseHtml);

baliseHtml.style.color="green";*/

//Click event

const qContainer = document.querySelector(".click-event");

qContainer.addEventListener("click", ()=>{
 qContainer.classList.toggle("question-click")
});