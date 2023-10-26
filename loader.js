var loader;
function loadNow(opacity) {
    if(opacity <= 0) {
        displayContent();
    }
    else{
        loader.style.opacity = opacity;
        window.setTimeout(function(){
            loadNow(opacity - 0.05)
        }, 100);
    }
}

function displayContent(){
    loader.style.display= "none";
    document.getElementsByClassName("contenedor").style.display = "block"
}

document.addEventListener("DOMContentLoaded", function(){
    loader = document.getElementById("preloader");
    loadNow(2);
});
