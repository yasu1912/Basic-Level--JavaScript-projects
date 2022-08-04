var bgColor = document.querySelector("#square")// this line is for describing to div.
function random() {  //this line is for describing a function.
    var array = ["blue","red","pink","yellow","green"];//this line is for create a new array with color.
    var backgroundcolor = array[Math.floor(Math.random()*5)]; // this line is for picking a random number and rounding that number up.this number is between 1 and 5. array[1<number<5]
    bgColor.style.backgroundColor=(backgroundcolor)//this line is for change to background.
}

