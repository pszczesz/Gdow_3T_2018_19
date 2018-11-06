
window.onload = start;

function start(){
   
    setInterval(function (){
        let d = new Date();
        let number1 = Math.floor(Math.random()*256);
        let number2 = Math.floor(Math.random()*256);
        let number3 = Math.floor(Math.random()*256);
        let color = "rgb("+number1+","+number2+","+number3+")";
        console.log(color);
        document.querySelector("#czas").style.color = color;
        document.querySelector("#czas").innerHTML = d.toLocaleTimeString();
    },1000);
}
