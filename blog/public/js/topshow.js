(function name(params) {
    let change = document.querySelector(".chang.e");
    let changed = document.querySelector(".chang.ed");
    let headnav = document.querySelector(".headnav");
    change.addEventListener("click", function () {
        change.style.display = "none";
        changed.style.display = "block";
        headnav.style.width = "0px";
        headnav.style.overflow = "hidden";
        headnav.style.transition = "1s";
    })
    changed.addEventListener("click", function () {
        change.style.display = "block";
        changed.style.display = "none";
        headnav.style.width = "460px";
        headnav.style.transition = "1s";
        setTimeout(() => { headnav.style.overflow = "visible"; }, 1000)

    })
})()