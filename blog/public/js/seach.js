(function name(params) {
    let btnB = document.querySelector(".seatop button");
        let btnG = document.querySelector(".seabtm button");
        let seach = document.querySelector(".seatop input"); 
        let sea = document.querySelector(".seabtm input");          
        btnB.addEventListener("click", function () {
            window.open("https://www.baidu.com/s?wd=" + seach.value + "&ie=utf-8&tn=90930979_hao_pg")
            seach.value = ""
        });
        btnG.addEventListener("click", function () {
            window.open("https://www.google.com/search?q=" + sea.value + "&oq=" + sea.value + "&aqs=chrome..69i57j69i60l2.2014j0j8&sourceid=chrome&ie=UTF-8")
            sea.value = ""
        })
})()