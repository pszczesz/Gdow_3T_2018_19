$(document).ready(function () {
    $("#rok").html(new Date().getFullYear());
    
    $("h3.header").click(function () {
       $(this).next().toggle(300); 
    });
    
    $("#zapisz").click(function () {
       //alert("fff");       
       let imOK = Validate($("#imie"));
       let nazOK = Validate($("#nazwisko"));
       if(imOK && nazOK){
           let wynik = "Dane z formularza: "+$("#imie").val()
              + " "+$("#nazwisko").val()+" ocena: "+$("#ocena").val();
           $("#wynik").html(wynik);
       }
    });
});


function Validate(elem){
    let wzorzec = /^[A-ZŁŻŹĆĄĘÓ][a-ząężźćńłó]+$/;
    if(wzorzec.test(elem.val())){
        elem.next("span").html("");
        return true;
    }else{
       elem.next("span").html("Błędne dane");
        return false; 
    }
}
