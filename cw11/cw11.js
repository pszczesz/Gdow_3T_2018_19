
window.onload =start;

function start(){
    zegar();
    setInterval(zegar,1000);
    let dd = new Date();
    let dni = ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"];
    let miesiace = ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień"
                    ,"wrzesień","październik","listopad","grudzień"];
    let color = '';
    switch(dd.getDay()){
        case 0: color="red";break;
        case 6: color="green";break;
        default : color="black";    
    }
    document.querySelector("#miesiac").innerHTML = miesiace[dd.getMonth()];
    document.querySelector("#data").innerHTML = dd.getDate();
    document.querySelector("#dzien").innerHTML = dni[dd.getDay()];
    document.querySelector("#dzien").style.color = color;
    document.querySelector("#rok").innerHTML = dd.getFullYear();
}
function zegar(){
    let dt = new Date();
    document.querySelector("#time").innerHTML = dt.toLocaleTimeString();
}