function start(){
    var bulb = document.querySelector(".image")
    bulb.setAttribute("src", "https://github.com/Mo-Abdullah06/LED-BULB/blob/main/electric%20bulb/assests/download.png?raw=true");
    bulb.classList.add("on"); //Add the "on" class
    bulb.classList.remove("off"); //Remove the "off" class if present
    var c = document.querySelector(".main")
    c.setAttribute("id","change")
}

function off() {
    var bulb = document.querySelector(".image");
    bulb.setAttribute("src", "https://github.com/Mo-Abdullah06/LED-BULB/blob/main/electric%20bulb/assests/download%20(1).png?raw=true")
bulb.classList.add("off");  //Add the "off" class
bulb.classList.remove("on"); //Remove the "on" class it present
}