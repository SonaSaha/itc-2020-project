var pics = [
    "Instigate_img/Instigate.png",
    "Instigate_img/Instigate_Mobile.png",
    "Instigate_img/ITC.png"
]
var img = document.querySelector("img");
var i = 1;
document.querySelector("button").addEventListener("click",function(){
    i=i%3;
    img.src=pics[i++];
});