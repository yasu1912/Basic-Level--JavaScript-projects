var bgColor = document.querySelector("#square")
function random() {  
    var array = ["black","red","pink","yellow","green"];
    var backgroundcolor = array[Math.floor(Math.random()*5)];
    bgColor.style.backgroundColor=(backgroundcolor)
    return
}

