var input = document.getElementsByClassName("search-input")[0];
var serachImg = document.getElementsByClassName("search-img")[0];
var xxx = document.getElementsByClassName('xxx')[0];
var noSign = document.getElementsByClassName('no-sign')[0];
document.addEventListener('keypress',function(e){
    if(e.keyCode == 13){
        if(input.value == "汽车工程师") {
            window.open("https://xdxxdxxdxxdxxdx.github.io/pythononplus/searchinner.html","_blank");
        }else{
            xxx.innerHTML = input.value;
            noSign.style.display = "block";
        }        
    }
});

serachImg.addEventListener('click',function(){
    if(input.value == "汽车工程师") {
        window.open("https://xdxxdxxdxxdxxdx.github.io/pythononplus/searchinner.html","_blank");
    }else{
        xxx.innerHTML = input.value;
        noSign.style.display = "block";
    }        
});

document.getElementsByClassName('confirm')[0].addEventListener('click',function(){
    noSign.style.display = "none";       
});