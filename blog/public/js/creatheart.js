(function name(params) {
    let heartwrap=document.querySelector(".heartwrap");
        let wrapbody=document.querySelector(".wrapbody")
        
        function random(min, max) {
            num = Math.floor(Math.random() * (max - min + 1) + min)
            return num
        }
        function creartHeart() {
            let heart = document.createElement("div");
            heart.style.left = random(10, wrapbody.offsetWidth - 40) + "px";
            heart.style.top = "0px"
            heart.className = "heart";
            heartwrap.appendChild(heart)
            sendHeart()
            function sendHeart() {
                heart.num = heart.offsetTop
                heart.style.top = heart.offsetTop + 1 + "px";
                if (parseInt(heart.style.top) > wrapbody.clientHeight - 20) {
                    cancelAnimationFrame(sendHeart)
                    heart.remove()
                } else {
                    requestAnimationFrame(sendHeart)
                }
            }
        }
        let timmer = setInterval(creartHeart, 1000)
        setTimeout(function () {
            clearInterval(timmer)
        }, 21000)
})()