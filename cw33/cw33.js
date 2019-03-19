const R = 10;
window.onload = function (){
    document.querySelector("#gener").onclick = function (){
        //alert("PI");
        let ile = parseInt(document.querySelector("#ile").value);
        if(!isNaN(ile) && ile>=100 && ile<=100000000){
            let piObject = GetPiObject();
            piObject.myPi = piObject.generPI(ile); 
            document.querySelector("#wynik").innerHTML = "Liczba Pi: "+piObject.myPi
                    +"<br> Różnica: "+(piObject.myPi-Math.PI);
        }else{
            document.querySelector("#wynik").innerHTML = "Błędne dane!!!";
            return;
        }
    };
};
function GetPiObject(){
    return {
      myPi : 0,
      generPI : function (ile){
          let pk=0;
          let p = ile;
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

