window.onload = start;
function start(){
    let dane = getWorkers();
    document.querySelector("#tabelka").innerHTML = genTab(dane);
    let trs = document.querySelectorAll("tr");
    for(let i=0;i<trs.length;i++){
        trs[i].oncontextmenu = function (event){
            event.preventDefault();
            return false;
        };
        trs[i].onmousedown = klik;        
    }
}
function genTab(dane){
    let html = "<table>";
    html += "<tr><th>Lp</th><th>Imię</th><th>Nazwisko</th><th>Pensja</th></tr>";
    let lp =0;
    for(let i=0;i<dane.length;i++){
        html += "<tr>";      
        html += "<td>"+(++lp)+"</td>";   
        for(let j=0;j<dane[i].length;j++){           
           html += "<td>"+dane[i][j]+"</td>"; 
        }
        html += "</tr>"
    }
    return html +"</table>";
}
function getWorkers(){
    return [["Anna","Nowak",2700]
        ,["Mariusz","Gryk",33300]
        ,["Edward","Kowal",6900]
        ,["Monika","Truk",5500]
        ,["Ryszard","Hajduk",4500]
        ,["Dominik","Fralek",4100]];
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

