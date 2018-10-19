
window.onload = start;

function start(){
    let h1 = document.querySelector("h1");
    h1.style.color = "yellow";
    let pars = document.querySelectorAll("p");
    //pars[2].style.backgroundColor = "red";
    for(let i=0; i<pars.length;i++){
        pars[i].onclick = klik;
    }
}
function klik(){
    if(this.style.backgroundColor == "red"){
        this.style.backgroundColor = "white";
        this.style.border = "";
    }else{
        this.style.backgroundColor = "red";
        this.style.border = "solid 1px #C72688";
    }
}
