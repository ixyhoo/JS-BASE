//document.querySelector("h4").style.color="green";

/*const baliseHtml = document.querySelector("h4");

console.log(baliseHtml);

baliseHtml.style.color="green";*/

//Click event

const qContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const reponse = document.querySelector("p");

qContainer.addEventListener("click", ()=>{
 qContainer.classList.toggle("question-click")
});

btn1.addEventListener("click", () => {
    reponse.style.visibility = "visible";
    reponse.style.background = "green";
})
btn2.addEventListener("click", () => {
    reponse.style.visibility = "visible";
    reponse.style.background = "red";
})


//----------------------------------------------------------------