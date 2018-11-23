window.onload = start;

function start(){
    document.querySelector("#oblicz").onclick = oblicz;
}
function oblicz(){
    let du = document.querySelector("#data").value;
    console.log(new Date(du));
    let dateUrodz = new Date(du);
    let dateNow = new Date();
    console.log((dateNow - dateUrodz)/(24*3600*1000));
    if(du.trim()!==''){
        document.querySelector("#wynik").innerHTML = "Twój wiek: "
            +(dateNow.getFullYear()-dateUrodz.getFullYear());
    }else{
        document.querySelector("#wynik").innerHTML = "Podaj poprawną datę";
    }
    
}
