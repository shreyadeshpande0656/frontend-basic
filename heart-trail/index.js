const e1=document.querySelector("body");

e1.addEventListener("mousemove",(event)=>{
    const xpos=event.offsetX;
    const ypos=event.offsetX;
    const spane1=document.createElement("span");
    e1.appendChild(spane1);
    spane1.style.left=xpos+"px";
    spane1.style.top=ypos+"px";
    console.log(event.offsetX);
})