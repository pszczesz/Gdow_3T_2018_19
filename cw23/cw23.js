window.onload = start;

function start() {
    document.querySelector("#pokaz").onclick = pokaz;
}
function pokaz() {
    if (document.querySelector("#scena").children.length === 0) {
        let k1 = document.createElement("img");
        let k2 = document.createElement("img");
        k1.setAttribute("src", "pics/k1.jpg");
        k1.setAttribute("alt", "kawa 1");
        k1.setAttribute("id", "k1");
        k2.setAttribute("id", "k2");
        k2.setAttribute("src", "pics/k2.jpg");
        k2.setAttribute("alt", "kawa 2");
        document.querySelector("#scena").appendChild(k1);
        document.querySelector("#scena").appendChild(k2);
        document.querySelector("#k1").onmouseenter = function (){
          console.log("najechano na element o id:"+this.getAttribute("id")); 
          this.setAttribute("src","pics/k1_od.jpg");
        };
         document.querySelector("#k1").onmouseleave = function (){
          console.log("zjechano z elementu o id:"+this.getAttribute("id"));
          this.setAttribute("src","pics/k1.jpg");
        };
        document.querySelector("#k2").onmousedown = function (){
          console.log("najechano na element o id:"+this.getAttribute("id"));
          this.setAttribute("src","pics/k2_od.jpg");
        };
         document.querySelector("#k2").onmouseup = function (){
          console.log("zjechano z elementu o id:"+this.getAttribute("id")); 
          this.setAttribute("src","pics/k2.jpg");
        };
    }
}