const lenp=document.querySelector('#lenno');
const upper=document.querySelector('#uc');
const lower=document.querySelector('#lc');
const num=document.querySelector('#num');
const schar=document.querySelector('#sc');
const passin=document.querySelector('#pass-input');
const copy=document.querySelector('#copy');
const gen=document.querySelector('#gen');

console.log(lenp.value);
console.log(upper.checked);
console.log(lower.checked);
console.log(num.checked);
console.log(schar.checked);




const ucstr='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lcstr='abcdefghijklmnopqrstuvwxyz';
const numstr='0123456789';
const scstr='!@#$%^&*()_:;<>?/';


gen.addEventListener('click',() =>{
    let str='';
    if(upper.checked){
        str+=ucstr;

    }
    if(lower.checked){
        str+=lcstr;

    }
    if(num.checked){
        str+=numstr;
        
    }
    if(schar.checked){
        str+=scstr;
        
    }

    console.log(str);
    let pass='';
    for (let i=0;i<lenp.value;i++){
        let index=Math.floor(Math.random() *str.length);
        console.log(index,'index');
        console.log("Math.random()",Math.random());
        console.log("mul",Math.random() *str.length);
        console.log(str[index]);
        pass+=str[index];


    }
    console.log(pass);
    passin.value=pass;
})
copy.addEventListener('click' ,() =>
{
    if(passin.value === ''){
        alert('Please generate a password first');
    }else{
        const newele=document.createElement('textarea');
        newele.value=passin.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('Password copied to clipboard');
        newele.remove();


       


    }
})