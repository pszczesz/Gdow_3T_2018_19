window.onload = function (){
  let u1 = new Uczen("Anna","Nowak",4.5,new Date("2005-12-12"));
  let u2 = new Uczen("Tomasz","Kowalski",4.5,new Date("2002-11-09"));
  let u3 = new Uczen("Ryszard","Urych",4.5,new Date("2009-03-23"));
  let uczniowie = [u1,u2,u3];
  document.querySelector("#wynik").innerHTML = uczniowieToList(uczniowie);  
};
function Uczen(imie,nazwisko,srOcen,dataUrodzenia){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.srOcen = srOcen;
    this.dataUrodzenia = dataUrodzenia;
    
    this.przedstawSie = function (){
        return "Imię: "+this.imie + " nazwisko: "+this.nazwisko+" średnia ocen: "
        +this.srOcen+" urodzony/a:"+this.dataUrodzenia.toLocaleDateString();
    };
};
function uczniowieToList(uczniowie){
    let html = "<ol>";
    for(let i=0;i<uczniowie.length;i++){
        html += "<li>"+uczniowie[i].przedstawSie()+"</li>";
    }
    return html + "</ol>";
}

