window.onload = start;
function start() {
    document.querySelector("#dodaj").onclick = klik;
    document.querySelector("#usun").onclick = usun;
    updatePars();
}
function klik() {
    let prezent = document.querySelector("#prezent").value;
    if (prezent.trim() !== '') {
        let li = document.createElement("li");        
        let lista = document.querySelector("#lista");
        let nt = document.createTextNode(prezent);
        li.appendChild(nt);      
        lista.appendChild(li);      
    }
    updatePars();
}

function usun(){
    let lista = document.querySelector("#lista");
    if(lista.children.length>0){
        let usuwany = lista.removeChild(lista.children[lista.children.length-1]);       
    }
    updatePars();
}
function updatePars(){
    let sp1 = document.querySelector("#ilosc");
    let lista = document.querySelector("#lista");
    sp1.innerHTML = "Ilość prezentów: "+lista.children.length;
}


