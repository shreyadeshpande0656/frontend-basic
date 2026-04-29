const inputE1=document.querySelector(".input");
inputE1.checked=true;
updatebody()
console.log(inputE1.checked);
const bodyE1=document.querySelector("body");


function updatebody(){
    if(inputE1.checked){
        bodyE1.style.background="black";
    }
    else{
        bodyE1.style.background="white";
    }
}
inputE1.addEventListener("input",()=>{
    updatebody()
})
