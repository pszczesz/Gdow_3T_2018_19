window.onload = start;

function start() {
    document.querySelector("#sprawdz").onclick = sprawdz;
    document.querySelector("ul").style.display = "none";
    document.querySelector("#pokaz").onclick = function (){//funkcja anonimowa - bez nazwy
      if(this.checked){
          document.querySelector("ul").style.display = "block";
      }else{
           document.querySelector("ul").style.display = "none";
      }  
    };
}
function sprawdz() {
    let password = document.querySelector("#password").value;
    console.log(password);
    let next = this.nextElementSibling;
    if (password.trim() === '') {
        next.innerHTML = "podaj hasło!!";
        return;
    }
    if (password.length < 7) {
        next.innerHTML = "SŁABE";
        next.style.color = "red";
        return;
    }
    if(ileCyfr(password)>1 && czyDuza(password)){
         next.innerHTML = "BARDZO SILNE!!";
        next.style.color = "lightgreen";
        return;
    }
    if (ileCyfr(password)>0) {
        next.innerHTML = "SILNE";
        next.style.color = "green";
        return;
    }    
    next.innerHTML = "ŚREDNIE";
    next.style.color = "yellow";
}
function czyDuza(text){
    let i = 0;    
    while (i < text.length) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            return true;
        }
        i++;
    }
    return false;
}
function ileCyfr(text) {
    let i = 0;
    let ile = 0;
    while (i < text.length) {
        if (text[i] >= '0' && text[i] <= '9') {
            ile++;
        }
        i++;
    }
    return ile;
}


