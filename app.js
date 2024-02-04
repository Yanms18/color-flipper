const colors = ["green", "red", "rbga(133,122,200)","#f15025"]
const color= document.querySelector(".color")
const button = document.getElementById("btn")

function getRandomNumber() {
    return   Math.floor(Math.random() * colors.length);
}




button.addEventListener("click", () => {
const RandomNumber = getRandomNumber();  

  
console.log(RandomNumber);

   document.body.style.backgroundColor = colors[RandomNumber];
   color.textContent = colors[RandomNumber];
});

