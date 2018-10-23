window.onload = start;

function start(){
    let licznik = 0;
    let secret = Math.floor(Math.random()*100)+1;
    document.querySelector("#sprawdz").onclick = klik;
    
    function klik(){
        licznik++;
        let liczba = parseInt(document.querySelector("#liczba").value);
        let wynik = document.querySelector("#wynik");
        if(isNaN(liczba)){
            wynik.style.color = "red";
            wynik.innerHTML = "Błędna liczba!!!";
        }else{
            if(liczba>secret){
                wynik.style.color = "blue";
                wynik.innerHTML = "Liczba za duża. Ilośc prób: "+licznik;
            }else if(liczba<secret){
                wynik.style.color = "lightblue";
                wynik.innerHTML = "Liczba za mała. Ilośc prób: "+licznik;
            }else{
                wynik.style.color = "green";
                wynik.innerHTML = "Zgadłeś!!! Ilośc prób: "+licznik;
            }
        }
    }
}


