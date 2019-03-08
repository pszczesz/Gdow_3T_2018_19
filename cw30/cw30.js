window.onload = function (){
  document.querySelector("#text").onkeypress = function (arg){
       // console.log("onkeypress"); 
       // console.log(arg);
      
  };
  document.querySelector("#text").onkeydown = function (arg){
      //  console.log("onkeydown");  
       // console.log(arg);
  };
  document.querySelector("#text").onkeyup = function (arg){
      //  console.log("onkeyup"); 
      //  console.log(arg);
       let text = document.querySelector("#wynik").innerHTML;
       //console.log(getChecked());
       let wybor = getChecked().value;
       switch(wybor){
           case "U":document.querySelector("#wynik").innerHTML
               = this.value.toUpperCase();break;
          case "L":document.querySelector("#wynik").innerHTML
               = this.value.toLowerCase();break;
          case "T":
          document.querySelector("#wynik").innerHTML
               = reverseString(this.value);break;
            default :document.querySelector("#wynik").innerHTML
               = this.value;
       }
  };
};
function reverseString(str) {
    return str.split("").reverse().join("");
}
function getChecked(){
    let radios = document.querySelectorAll("input");
    for(let i=0;i<radios.length;i++){
        if(radios[i].type=="radio" && radios[i].checked){
            return radios[i];
        }
    }
}

