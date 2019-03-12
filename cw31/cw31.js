window.onload = function () {
  const ile=10;
  document.querySelector("#wyb").innerHTML = GenerSelect(ile);
  document.querySelector("#text").onkeyup = function (){
    let tekstOrg = this.value;
    let klucz = parseInt(document.querySelector("#klucz").value);
    document.querySelector("#wynik").innerHTML = Cezar(tekstOrg,klucz);
  };
};
function Cezar(text, key){
   // console.log(text+" "+key);
   let wynik = "";
   for(let i=0;i<text.length;i++){
       wynik += IsAlpha(text[i]) ? CezarChar(text[i],key) : text[i];
   }
  return wynik;
}
function IsAlpha(znak){
    return znak.toLowerCase()>='a' && znak.toLowerCase()<='z'; 
}
function CezarChar(znak,key){
    let wynik = String.fromCharCode(znak.charCodeAt(0)+key);
    return IsAlpha(wynik)? wynik : String.fromCharCode(wynik.charCodeAt(0)-26);
}
function GenerSelect(ile){
    let html = "Klucz: <select id='klucz'>";
    for(let i=0;i<=ile;i++){
        html += "<option value='"+i+"'>"+i+"</option>";
    }
    return html + "</select>";
}


