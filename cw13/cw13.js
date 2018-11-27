window.onload = start;
function start(){
    let trs = document.querySelectorAll("tr");
    for(let i=0;i<trs.length;i++){
        trs[i].oncontextmenu = function (event){
            event.preventDefault();
            return false;
        };
        trs[i].onmousedown = klik;        
    }
}
function klik(event){
    switch(event.button){
        case 0: this.style.backgroundColor = "#cccc00";break;
        case 1:this.style.backgroundColor = "white";
                this.style.fontWeight = "normal";break;
        case 2: this.style.fontWeight = "bold";break;
        default:this.style.backgroundColor = "white";
                this.style.fontWeight = "normal";
                break;
    }
}

