
window.onload = start;

function start(){
    setInterval(zmiana,3000);    
}
function zmiana(){
    let licz1 = Math.floor(Math.random()*255);
    let licz2 = Math.floor(Math.random()*255);
    let licz3 = Math.floor(Math.random()*255);
    document.querySelector("#napis").style.color = "rgb("+licz1+","+licz2+","+licz3+")";
    let oldObrazek = document.querySelector("#obrazek").getAttribute("src");
    let obrazek = oldObrazek === "ob1.png" ? "ob2.png" :"ob1.png";
    document.querySelector("#obrazek").setAttribute("src",obrazek);
}

