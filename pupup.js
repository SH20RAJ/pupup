
document.querySelectorAll('.pupup_close')[0].addEventListener("click",()=>document.querySelectorAll('body')[0].classList.toggle('pupup_active'));
document.querySelectorAll('.pupup_toggeler').forEach((e)=>{e.addEventListener("click",()=>document.querySelectorAll('body')[0].classList.toggle('pupup_active'));})


let pupup=(content,title)=>{
    title=(title || title!=undefined)?title:"Title";
    document.querySelectorAll('.pupup_title')[0].innerHTML = title;
    document.querySelectorAll('.pupup_container')[0].innerHTML = content;
}

pupup( "This is the content");
