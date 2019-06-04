$(document).ready(function (){
    let d1 = $("#d1");//document.querySel...
    console.log(d1);
    let d2 = document.querySelector("#d2");
    d1.click(function (){
        $("#result").html($(this).css("background-color"));
        $("#result")
                .css({"border":"solid 1px green","color":"blue"});
    });
    console.log(d1);
    d1.html("Po zmianie");
    d2.innerHTML="Próba zmiany z jQuery";
    d2.style.color = "red";
});


