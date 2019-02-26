window.onload = function (){
    var obrazki = [];
    obrazki[100]="imgs/1osob.jpg";
    obrazki[200]="imgs/2osob.jpg";
    obrazki[300]="imgs/3osob.jpg";
    obrazki[400]="imgs/4osob.jpg";
    document.getElementById("pokoj").onchange = function (){        
        document.getElementById("obrazek")
                .setAttribute("src",obrazki[this.value]);
        document.getElementById("cena").innerHTML = "cena za pokój: "
        +this.value+"PLN";
    };
    document.getElementById("oblicz").onclick = function (){
        var  ilosc = parseInt(document.getElementById("ilosc").value);
        console.log(ilosc);
        document.getElementById("wynik").innerHTML 
                = "Koszt za pokój "
                +(ilosc*document.getElementById("pokoj").value)+"PLN";
    };
};


