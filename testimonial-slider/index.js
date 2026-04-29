const test=[
    {
        name:"Cherise G",
        photourl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"As a long-time Apple user, I can confidently say that their products are unmatched in quality and reliability. From their sleek design to their top-notch performance, Apple always exceeds my expectations."
    },
    {
        name:"Emily F",
        photourl:"https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I've been a loyal Apple customer for years, and their customer service has never let me down. They always go above and beyond to ensure I am satisfied with my purchase and address any issues promptly"
    },
    {
        name:"Courteney Cook",
        photourl:"https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Apple products have truly transformed the way I work and communicate. The seamless integration between my devices allows me to be more productive and efficient, making my life so much easier."
    },
    {
        name:"Hannah Busing",
        photourl:"https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I can't imagine using any other brand after experiencing the convenience and innovation that Apple products offer. The user-friendly interfaces and intuitive features make technology enjoyable and accessible for everyone"
    }

]
const imgEl=document.querySelector("img")
const textEl=document.querySelector(".text")
const usernameE1=document.querySelector(".username")

let idx=0

function update(){
    const{name,photourl,text}=test[idx]
    imgEl.src=photourl;
    textEl.innerText=text;
    usernameE1.innerText=name;
    idx++
    if (idx=test.length){
        idx=0;
    }
    setTimeout(()=>{update();},2000);
}