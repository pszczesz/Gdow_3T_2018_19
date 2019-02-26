window.onload = function (){
    var data = new Date();  
    var dni = ["niedziela","poniedziałek","wtorek","środa", "czwartek","piątek","sobota"];
  document.getElementById("stopka").innerHTML = 
          data.getDate()+", "+dni[data.getDay()]+" "+data.getFullYear();  
  document.getElementById("wzorzec").onmouseover = function(){
    document.getElementById("kopia").innerHTML = this.innerHTML;  
  };
  document.getElementById("wzorzec").onmouseout = function(){
    document.getElementById("kopia").innerHTML = "";  
  };
};

