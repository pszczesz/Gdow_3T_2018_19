window.onload = function (){
   document.querySelector("#zapisz").onclick = function (){
      let u1 = GetFromForm(); 
      document.querySelector("#wynik").innerHTML = u1.przedstawSie();
   }; 
};

function GetFromForm(){
    let imieA = document.querySelector("#imie").value;
    let nazwiskoA = document.querySelector("#nazwisko").value;
    let wiekA = parseInt(document.querySelector("#wiek").value);
    return {imie:imieA, 
            nazwisko:nazwiskoA,
            wiek:wiekA,
            przedstawSie: function (){
                return this.imie+" "+this.nazwisko+" wiek: "+this.wiek;
            }
    };
};

