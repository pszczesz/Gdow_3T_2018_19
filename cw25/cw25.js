window.onload = function (){
  document.querySelector("#generuj").onclick = function (){
     let limit = parseInt(document.querySelector("#ilosc").value);
     if(!isNaN(limit) && limit>0){
         let isPa = document.querySelector("#pa").checked;
         let dane = [];
        /* let index = 0;
         let licznik = 0;
         if(isPa){
             while(licznik<limit){
                 if(++index%2==0) {
                     dane.push(index);
                     licznik++;
                 }
             }
         }else{
             while(licznik<limit){
                 if(++index%2!=0) {
                     dane.push(index);
                     licznik++;
                 }
             }
         }*/
         //---------------------------------------
         for(let i=1;i<=limit;i++){
             if(isPa) dane.push(2*i);
             else dane.push(2*i+1);
         }         
         //---------------------------------------
         document.querySelector("#wynik").innerHTML = dane;
     }else{
         document.querySelector("#wynik").innerHTML = "błędne dane!!!";
     }
  } ; 
};

