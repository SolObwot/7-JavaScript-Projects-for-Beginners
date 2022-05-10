var select = document.getElementById("select");
var SelectText = document.getElementById("SelectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var icon = document.getElementById("icon");

select.onclick = function(){
    list.classList.toggle("hide");
    icon.classList.toggle("rotate");
}

for(options of options){
    options.onclick = function(){
        SelectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        icon.classList.toggle("rotate");
    }
}
