const order=document.querySelector("h6 span")
const quote=document.querySelector(".container p")

let number=1;

function fetchData(){
  fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data =>{
    quote.textContent=data?.slip.advice   
    number++ 
    order.textContent="#"+number
  })
  .catch(error =>{
    console.log("Error", error)
  })
}

