window.onload = start;

function start(){
    document.querySelector("#btn1").onclick = klik;
}
function klik(){
    let lis = document.querySelectorAll("li");
    for(let i=0;i<lis.length;i++){
        if(lis[i].style.display=="inline-block"){
            lis[i].style.display = "list-item";
            this.value = "Zwiń";
        }else{
            lis[i].style.display = "inline-block";
            this.value = "Rozwiń";
        }
    }
}
