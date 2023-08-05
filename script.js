const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links");

toggle.addEventListener("click",function(){
    if(links.classList.contains("showlink")){
        links.classList.remove("showlink");
    }else{
        links.classList.add("showlink")
    }
})

 function dark(){
    var mod = document.body;
    mod.classList.toggle("mode");
}