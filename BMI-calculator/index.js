const btnel=document.getElementById("btn")
const bmiinput=document.getElementById(bmi-result)
btnel.addEventListener("click",calculateBMI())
function calculateBMI(){
    const h=document.getElementById("height").value /100
    const w=document.getElementById("weight").value
    const bmi=w/(h*h)
    bmiinput.value=bmi




}