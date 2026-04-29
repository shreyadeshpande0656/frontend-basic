let us=0;
let cs=0;
const usersco=document.querySelector("#user-score");
const compsco=document.querySelector("#comp-score");


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#m");
const gen=()=>{
    let op=["rock","paper","scissor"];
    const rand= Math.floor(Math.random()*3);
    return op[rand];

}
const draw=()=>{
    console.log("Game was drawn");
    msg.innerText="Game was drawn";

}

const show=(userwin,userchoice,compch) =>{
    if(userwin){
        us++;
        usersco.innerText=us;
        console.log("You win ");
        msg.innerText="You win ";
        

    }
    else{
        cs++;
        compsco.innerText=cs;
        console.log("You lose");  
        msg.innerText="You lose";

    }
}
const pg=(userchoice) => {
    console.log("user choice : ",userchoice);
    const compch=gen();
    console.log("Computer Choice", compch);

    if(userchoice===compch){
        draw();

    }
    else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin= compch ==="paper" ? false:true;
    }
    else if(userchoice==="paper"){
        userwin=compch==="scissor" ? false : true;
    }
    else {
        userwin=compch==="rock" ? false : true;
    }
    show(userwin);

    }
    


    }
 choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id")
        pg(userchoice);
       
        
    });
 });
