const sb=document.querySelector('.scrollbar');

window.addEventListener('scroll',() => {
    console.log('Scrolly',window.scrollY);
    console.log('scrollheight',document.body.scrollHeight);
    console.log("inner height",window.innerHeight)
    let p=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
    console.log(p);
    sb.style.width=p + '%'

})