window.onload = start;

function start(){
   // alert("dfdffd");
   let dts = document.querySelectorAll("dt");
   for(let i=0; i<dts.length;i++){
       dts[i].onclick = klik;
   }
}
function klik(){
    let next = this.nextElementSibling;
    console.log(next);
    if(next.style.display === "none"){
        next.style.display = "block";
    }else{
        next.style.display = "none";
    }
}


