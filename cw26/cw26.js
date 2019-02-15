window.onload = function () {
    document.querySelector("#losuj").style.visibility = "hidden";
    const rows = 7;
    const cols = 7;
    const ilosc = 6;
    let losowe = setLosowe(rows, cols);
    let wybrane = setWybrane(rows, cols);

    document.querySelector("#start").onclick = function () {
        losowe = setLosowe(rows, cols);
        wybrane = setWybrane(rows,cols);
        document.querySelector("#prawy").innerHTML = generTab(rows, cols);
        let tds = document.querySelectorAll("td");        
        for (let i = 0; i < tds.length; i++) {
            tds[i].style.color = "black";
            tds[i].onclick = function () {
                let ile = howManySelect(wybrane);
                if (ile < 6) {
                   // console.log(this.innerHTML);
                    this.style.color = "lightgreen";
                    wybrane[this.innerHTML-1] = true;
                    console.log(wybrane);
                }
            };
        }
        document.querySelector("#losuj").style.visibility = "visible";
    };
    document.querySelector("#losuj").onclick = function () {
        let licznik = 0;
        losowe = setLosowe(rows, cols);
        while (licznik < ilosc) {
            let liczba = Math.floor(Math.random() * (cols * rows));
            if (losowe[liczba] === false) {
                losowe[liczba] = true;
                licznik++;
            }
        }
        //console.log(losowe);
    };
    document.querySelector("#sprawdz").onclick = function () {
        let tds = document.querySelectorAll("td");
        //console.log(losowe);
        let trafione = [];
        for (let i = 0; i < losowe.length; i++) {
            tds[i].classList.remove("wylosowane");
            
        }
        if (losowe.length > 0) {
            for (let i = 0; i < losowe.length; i++) {
                if (losowe[i] === true) {
                    tds[i].className = "wylosowane";
                }
                if(losowe[i]===true && wybrane[i]===losowe[i]){
                trafione.push(i+1);
            }
            console.log(trafione);
            }
        }
        document.querySelector("#wynik").innerHTML = "Trafione: "+trafione;
    };
};
function setLosowe(rows, cols) {
    let losowe = [];
    for (let i = 0; i < rows * cols; i++) {
        losowe.push(false);
    }
    return losowe;
}
function setWybrane(rows, cols) {
    let wybrane = [];
    for (let i = 0; i < rows * cols; i++) {
        wybrane.push(false);
    }
    return wybrane;
}
function howManySelect(wybrane) {
    let licznik = 0;
    for (let i = 0; i < wybrane.length; i++) {
        if (wybrane[i] === true)
            licznik++;
    }
    return licznik;
}
function generTab(rows, cols) {
    let html = "<table>";
    let liczba = 0;
    for (let i = 0; i < rows; i++) {
        html += "<tr>";
        for (let j = 0; j < cols; j++) {
            liczba++;
            html += "<td>" + liczba + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    return html;
}

