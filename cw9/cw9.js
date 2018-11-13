window.onload = start;

function start(){
    document.querySelector("#start").onclick = begin;   
}
function begin(){
    const rows = 20;
    const cols = 20;
    let html = "<table id='tab'>";
    for(let i=0;i<rows;i++){
        html += "<tr>";
        for(let j=0;j<cols;j++){
            html += "<td></td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    document.querySelector("#scena").innerHTML = html;
    let tds = document.querySelectorAll("td");
    for(let i=0;i<tds.length;i++){
        tds[i].addEventListener("contextmenu", function (event){
            event.preventDefault();
            return false;
        });
        tds[i].addEventListener("mousedown",klik);
    }        
}
function klik(event){
    switch (event.button){
        case 0: this.innerHTML = "<img src='x.png' alt='krzyżyk'/>"; break;
        case 1:  this.innerHTML = ""; break;
        case 2:  this.innerHTML = "<img src='o.png' alt='krzyżyk'/>"; break;
        default : alert("error");
    }    
}
