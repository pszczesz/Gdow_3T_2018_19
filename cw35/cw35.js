window.onload = function (){
    document.querySelector("#oblicz").onclick = function (){
       let metr = 4000;
       let pokoj = 1000;       
       let metraz = parseFloat(document
               .querySelector("#metraz").value);
       let pokoje = parseInt(document
               .querySelector("#pokoje").value);
       let kafelki = document.querySelector("#kafelki")
               .checked ? 2000 : 0;
       document.querySelector("#wynik")
               .innerHTML = "Koszt mieszkania: "
                    +(metr*metraz+pokoj*pokoje+kafelki);
    };
};

