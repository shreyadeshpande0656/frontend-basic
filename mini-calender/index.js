const mn=document.getElementById("monthname")
const dn=document.getElementById("dayname")
const dayno=document.getElementById("dayno")
const year=document.getElementById("year")

const date=new Date();

mn.innerText=date.toLocaleString("en",{month:"long"})

dn.innerText=date.toLocaleString("en",{weekday:"long"})
dayno.innerText=date.getDate()
year.innerText=date.getFullYear()



