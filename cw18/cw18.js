window.onload = start;

function start(){
    document.querySelector("h2").onclick = h2Klik;
    document.querySelector("h1").onclick = h1Klik;   
    document.querySelector("img").onclick = imgKlik; 
    alert(document.querySelector("h1").style.display);
}

function h2Klik(){
    if(this.style.display == "inline"){
        this.style.display = "block";
    }else{
        this.style.display = "inline";
    }
    this.innerHTML = this.style.display;
}
function h1Klik(){
    if(this.style.display == "inline"){
        this.style.display = "block";
    }else{
        this.style.display = "inline";
    }
    this.innerHTML = this.style.display;
}
function imgKlik(){
    if(this.style.display == "block"){
        this.style.display = "inline";
    }else{
        this.style.display = "block";
    }   
}