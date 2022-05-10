var ImgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var oriimg = document.getElementById("oriimg");
var Right = document.getElementById("Right");



oriimg.style.width = ImgBox.offsetWidth + "px";

var ieftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function(e){
    var BoxWidth = (e.pageX - ieftSpace) + "px";
    imgWrap.style.width = BoxWidth;
    Right.style.left = BoxWidth;
}