window.onload = start;

function start(){
    document.querySelector("#gener").onclick = klik;
}

function klik(){
    let cols = parseInt(document.querySelector("#cols").value);
    let rows = parseInt(document.querySelector("#rows").value);
    if(isNaN(cols) || isNaN(rows)){
        document.querySelector("#wynik").innerHTML = "Błedne dane";
    }else{
        if(cols<=0 || cols>50) cols=20;
        if(rows<=0 || rows>50) rows=20;
        document.querySelector("#wynik").innerHTML = generTab(rows,cols);
    }
}
function generTab(rows,cols){
    let html = "<table>";
    for(let i=1;i<=rows;i++){
        html += "<tr>";
        for(let j=1; j<=cols;j++){
            let wyr = i==1 || j==1 ? "class='first'" :""
            html += "<td "+wyr+">"+(i*j)+"</td>";
        }
        html +="</tr>";
    }
    html += "</table>";
    return html;
}
