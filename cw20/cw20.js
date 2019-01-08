window.onload = start;

function start(){
    let first = document.querySelector("#first");
    console.log(first.nextElementSibling);
    console.log(first.nextSibling);
    let dzieci = first.children;
    let lis = document.querySelector("ul").children;
    for(let i=0;i<lis.length;i++){
        lis[i].onclick = under;
    }
    first.children[1].style.color = "red";
    //first.childNodes[1].style.color = "red";
//    for(let i=0;i<dzieci.length;i++){
//        dzieci[i].onclick = klik;
//    }
}
function under(){
    if(this.style.textDecoration === "underline"){
        this.style.textDecoration = "none";
    }else{
        this.style.textDecoration = "underline";
    }
}
function klik(){
    alert(this.innerHTML);
}