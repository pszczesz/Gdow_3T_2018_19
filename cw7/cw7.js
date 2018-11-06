window.onload = start;

function start(){
    document.querySelector("#oblicz").onclick = klik; 
    document.querySelector("#kolo").onclick = klikKolo; 
    document.querySelector("#prostakat").onclick = klikProstokat; 
    document.querySelector("#kwadrat").onclick = klikKwadrat; 
}
function klik(){   
    let r = parseFloat(document.querySelector("#r").value);
    if(!isNaN(r) && r>=0){
        document.querySelector("#wynik").innerHTML 
                = "Pole koła wynosi: "+(3.14*r*r).toFixed(2)
                +" <br>Obwód koła wynosi: "+(2*3.14*r).toFixed(2);
    }else{
        document.querySelector("#wynik").innerHTML = "Błędne dane";
    }
}
function klikKolo(){
    document.querySelector("#scena").innerHTML = htmlKolo();  
    let bKolo = document.querySelector("#obliczKolo");
    //toDo
}
function klikProstokat(){
    document.querySelector("#scena").innerHTML = htmlProstokat();
    let bProstokat = document.querySelector("#obliczProstokat");
    bProstokat.onclick = function (){
        let a = parseFloat(document.querySelector("#aProstokat").value);
        let b = parseFloat(document.querySelector("#bProstokat").value);
        document.querySelector("#wynikProstokat")
                .innerHTML = "Pole prostokąta wynosi: "+(a*b);
    };
    
}
function klikKwadrat(){
    document.querySelector("#scena").innerHTML = htmlKwadrat();
     let bKwadrat = document.querySelector("#obliczKwadrat");
     bKwadrat.onclick = function () {
        let a = parseFloat(document.querySelector("#aKwadrat").value);
        if(!isNaN(a) && a>=0){
            document.querySelector("#wynikKwadrat")
                    .innerHTML = "Pole kwadratu: "+(a*a);
        }else{
             document.querySelector("#wynikKwadrat")
                    .innerHTML = "Błędne dane";
        }
    };
}
function htmlKolo(){
    let html = "<label for='rKolo'>Podaj promień:</label>"
                +"<input type='text' id='rKolo'/>"
            +"<input type='button' value='Oblicz' id='obliczKolo'/>"
            +"<div id='wynikKolo'></div>";
    return html;
}
function htmlKwadrat(){
    let html = "<label for='aKwadrat'>Podaj bok:</label>"
                +"<input type='text' id='aKwadrat'/>"
            +"<input type='button' value='Oblicz' id='obliczKwadrat'/>"
            +"<div id='wynikKwadrat'></div>";
    return html;
}
function htmlProstokat(){
    let html = "<label for='aProstokat'>Podaj bok a:</label>"
                +"<input type='text' id='aProstokat'/><br>"
          +"<label for='bProstokat'>Podaj bok b:</label>"
                +"<input type='text' id='bProstokat'/><br>"
            +"<input type='button' value='Oblicz' id='obliczProstokat'/>"
            +"<div id='wynikProstokat'></div>";
    return html;
}