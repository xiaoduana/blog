(function name(params) {
    let close=document.querySelector(".sign-center-close");
    let admin=document.querySelector(".admin");
    let menuSign=document.querySelector(".menu-sign");
    admin.addEventListener("click",()=>{menuSign.style.display="block"})
    close.addEventListener("click",()=>{menuSign.style.display="none"})
})()