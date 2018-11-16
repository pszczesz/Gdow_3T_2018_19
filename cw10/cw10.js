window.onload = start;

function start(){
    let t1 = new Array("czerwony","zielony",34,true,[3,7,"33"]);
    let t2 = [23,67,"ala ma kota",45,8];
    document.querySelector("#t1").innerHTML = t1+"<br>"+t2;
    document.querySelector("#btn1").onclick = klik1;
}
function klik1(){
    let imiona = ["Anna","Roman","Jurek","Tomasz","Monika","test"];
    imiona.pop();
    alert(imiona.join("-"));
    imiona.push("Nowy");
    delete imiona[3];
    let html = "<ul>";
    for(let i=0; i<imiona.length; i++){
        html += "<li>"+imiona[i]+"</li>";
    }
    html += "</ul>";
    document.querySelector("#op").innerHTML = html;
}

