window.onload = start;
function start() {
    document.querySelector("#btn1").onclick = klik;
    document.querySelector("#btn2").onclick = usun;
}
function klik() {
    let text = document.querySelector("#text").value;
    if (text.trim() != '') {
        let p = document.createElement("p");
        console.log(p);
        let d1 = document.querySelector("#d1");
        let nt = document.createTextNode(text);
        p.appendChild(nt);
        console.log(p);
        d1.appendChild(p);
        console.log(d1.childNodes);
         console.log(d1.children[d1.children.length-1]);
    }
}

function usun(){
    let d1 = document.querySelector("#d1");
    if(d1.children.length>0){
        let usuwany = d1.removeChild(d1.children[d1.children.length-1]);
        console.log(usuwany);
    }
}