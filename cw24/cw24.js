window.onload = start;

function start(){
    document.querySelector("#add").onclick = add;
}
function add(){
    let imie = document.querySelector("#imie");
    let nazwisko = document.querySelector("#nazwisko");
    let kwota = document.querySelector("#kwota");
    let imOK = Validate(imie);
    let naOK = Validate(nazwisko);
    let kwOK = ValidateKwota(kwota);
    if(imOK && naOK && kwOK){
        let tab = document.querySelector("#tab");
        let row = tab.insertRow(-1);
        let cellImie = row.insertCell(0);
        let cellNazwisko = row.insertCell(1);
        let cellKwota = row.insertCell(2);
        let cellOp = row.insertCell(3);
        cellImie.innerHTML = imie.value.trim();
        cellNazwisko.innerHTML = nazwisko.value.trim();
        cellKwota.innerHTML = kwota.value;
        cellOp.innerHTML = "<input type='button' value='Usuń'/>";
        let btns = document.querySelectorAll("td input");
       // console.log(btns);
        for(let i=0;i<btns.length;i++){
            btns[i].onclick = function (){
              console.log(this.parentNode.parentNode);  
            };
        }
    }
}
function Validate(elem){
    let next = elem.nextElementSibling;
    if(elem.value.trim()!=''){
        next.innerHTML = "";
        return true;
    }else{
        next.innerHTML = "Błedne dane!!!";
        return false;
    }
}
function ValidateKwota(elem){
    let next = elem.nextElementSibling;
    if(!isNaN(parseFloat(elem.value))){
        next.innerHTML = "";
        return true;
    }else{
        next.innerHTML = "Błedne dane!!!";
        return false;
    }
}


