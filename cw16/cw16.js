window.onload = start;
let obrazki = ["ch1.png","ch2.png","ch3.png","ch4.png","ch5.png","ch6.png","ch7.png",
                "ch8.png","ch9.png","ch10.png"];
let actual = 0;
function start(){    
    setInterval(zmiana,5000); 
    document.querySelector("#up").onclick = up;
     document.querySelector("#down").onclick = down;
}
function up(){
    actual = actual+1;
    if(actual>obrazki.length-1) actual = actual-obrazki.length;
    ustawObrazek(actual);
}
function down(){
    actual = actual-1;
    if(actual<0) actual = actual+obrazki.length;
    ustawObrazek(actual);
}
function zmiana(){
    actual = Math.floor(Math.random()*10);
    ustawObrazek(actual);
}
function ustawObrazek(index){
    document.querySelector("#obrazek").setAttribute("src","obrazy/"+obrazki[index]);
    document.querySelector("#podpis").innerHTML = obrazki[index];
}