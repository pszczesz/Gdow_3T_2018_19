const R = 10;
window.onload = function (){
    document.querySelector("#gener").onclick = function (){
        //alert("PI");
        let ile = parseInt(document.querySelector("#ile").value);
        if(!isNaN(ile) && ile>=100 && ile<=10000000){
            let piObject = GetPiObject(ile);
         //   console.log(piObject);
            let MyPi = piObject.generPI();
            document.querySelector("#wynik").innerHTML = "Liczba Pi: "+MyPi
                    +"<br> Różnica: "+(MyPi-Math.PI);
        }else{
            document.querySelector("#wynik").innerHTML = "Błędne dane!!!";
            return;
        }
    };
};
function GetPiObject(ile){
    return {
      dokladnosc: ile,
      generPI : function (){
          let pk=0;
          let p = this.dokladnosc;
          for(let i=0;i<p;i++){
              let x = Math.random()*R;
              let y = Math.random()*R;
              if(Math.sqrt(x*x+y*y)<=R){
                  pk++;
              }
             // console.log("p = "+p+" pk = "+pk);
          }
            return pk/p *4;
      }
    };
}

