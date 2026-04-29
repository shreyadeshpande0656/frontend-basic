const btnEl=document.getElementById("btn");
const birthdayEl=document.getElementById("birthday");
const resultEl=document.getElementById("result");

function  calculateage(){
    const birthdayvalve=birthdayEl.value;
    if(birthdayvalve===""){
        alert("Please enter your birthday");
    }else{
        const age=getAge(birthdayvalve);
        console.log(age);
        resultEl.innerText='Your age is $ {age} ${age >1 ? "years" : "year"} old ';
    }


}
function getAge(birthdayvalve){
 const currentdate=new Date();
 const birthdate=new Date(birthdayvalve);
 let age=currentdate.getFullYear()-birthdate.getFullYear();
 const month=currentdate.getMonth()-birthdate.getMonth();
 if(month <0 || (month === 0 && currentdate.getDate() <birthdate.getDate())){
    age--;
 }
 return age;




}
btnEl.addEventListener("click", calculateage);
