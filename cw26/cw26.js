window.onload = function (){    
    document.querySelector("#losuj").style.visibility = "hidden";
    const rows = 7;
    const cols = 7;
    const ilosc = 6;
    let losowe = setLosowe(rows,cols);
    
    document.querySelector("#start").onclick = function (){
        losowe = setLosowe(rows,cols);
        document.querySelector("#prawy").innerHTML = generTab(rows,cols);
        document.querySelector("#losuj").style.visibility = "visible";
    };
    document.querySelector("#losuj").onclick = function (){
        let licznik = 0;
        losowe = setLosowe(rows,cols);
        while(licznik<ilosc){
            let liczba = Math.floor(Math.random()*(cols*rows));
            if(losowe[liczba]===false){
                losowe[liczba]=true;
                licznik++;
            }
        }
        console.log(losowe);
    };
    document.querySelector("#sprawdz").onclick = function (){
        let tds = document.querySelectorAll("td");
        console.log(losowe);
        for(let i=0;i<losowe.length;i++){
            tds[i].classList.remove("wylosowane"); 
            }
        if(losowe.length>0){
            for(let i=0;i<losowe.length;i++){
                if(losowe[i]===true){
                    tds[i].className = "wylosowane";
                }
            }
        }
    };
};
function setLosowe(rows,cols){
    let losowe = [];
    for(let i=0;i<rows*cols;i++){
        losowe.push(false);
    }
    return losowe;
}
function generTab(rows,cols){
    let html = "<table>";
    let liczba=0;
    for(let i=0;i<rows;i++){
        html += "<tr>";
        for(let j=0;j<cols;j++){
            liczba++;
            html += "<td>"+liczba+"</td>";
        }        
        html+="</tr>";
    }
    html += "</table>";
    return html;
}

