const quiz=[
    {
        question:"What is most used programming language?",
        ans1text:"Java",
        ans2text:"C",
        ans3text:"Python",
        ans4text:"JavaScript",
        answer:"JavaScript",
    },
    {
        question:"Who is President of US?",
        ans1text:"Joe Biden",
        ans2text:"Donald Trump",
        ans3text:"Barack Obama",
        ans4text:"George Bush",
        answer:"Joe Biden",
    },
    {
        question:"What does HTML stand for?",
        ans1text:"Hypertext Markup Language",
        ans2text:"Cascading Style Sheet",
        ans3text:"Jason Object Notation",
        ans4text:"Helicopters Terminals Motorboats Lamborginis",
        answer:"Hypertext Markup Language",
    },
    {
        question:"What year was javascript launched?",
        ans1text:"1996",
        ans2text:"1995",
        ans3text:"1994",
        ans4text:"None of the above",
        answer:"1995",
    }
]
const submit=document.getElementById("submit");

let curq=0;
let score=0;
const question=document.getElementById("quizq");
console.log(question);
console.log(question.textContent);
const op1=document.getElementById("text_option1");
const op2=document.getElementById("text_option2");
const op3=document.getElementById("text_option3");
const op4=document.getElementById("text_option4");
const answerele=document.querySelectorAll(".answer");

console.log(op1);
console.log(op2);
console.log(op3);
console.log(op4);
console.log(op1.textContent);
console.log(op2.textContent);
console.log(op3.textContent);
console.log(op4.textContent);
console.log(answerele);
console.log(quiz[curq].ans1text);
console.log(quiz[curq].ans2text);
console.log(quiz[curq].ans3text);
console.log(quiz[curq].ans4text);





console.log(quiz[curq].question);

question.textContent=quiz[curq].question;
op1.textContent=quiz[curq].ans1text;
op2.textContent=quiz[curq].ans2text;
op3.textContent=quiz[curq].ans3text;
op4.textContent=quiz[curq].ans4text;



submit.addEventListener("click", () => {
    const checkedans=document.querySelector('input[type="radio"]:checked');
    console.log(checkedans);
    console.log(checkedans.nextElementSibling.textContent);
    if(checkedans ===null){
        alert("Please select an answer");
    }else{
        if(checkedans.nextElementSibling.textContent === quiz[curq].answer){
            score++;
        }
        
        curq++;
        if( curq<quiz.length){
            question.textContent=quiz[curq].question;
            
            op1.textContent=quiz[curq].ans1text;
            op2.textContent=quiz[curq].ans2text;
            op3.textContent=quiz[curq].ans3text;
            op4.textContent=quiz[curq].ans4text;
            checkedans.checked=false;

        }
        else{
            alert("Your score is "+ score+"out of"+quiz.length);
            location.reload();
        }
    }


})







