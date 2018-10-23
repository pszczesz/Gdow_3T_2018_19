window.onload = start;

function start(){
    let licznik = 0;
    let secret = Math.floor(Math.random()*100)+1;
    document.querySelector("#sprawdz").onclick = klik;
    
    function klik(){
        licznik++;
        alert(licznik);
    }
}


