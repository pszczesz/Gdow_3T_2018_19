window.onload = function (){
  let mainmenu = document.querySelectorAll(".mainmenu");
  console.log(mainmenu);
  for(let i=0;i<mainmenu.length;i++){
      mainmenu[i].onmouseover = function (){          
          let next = this.nextElementSibling;
          console.log(next.style.display);
          if(next.style.display!=="block"){
              next.style.display="block";
          }else{
              next.style.display = "none";
          }
      };
  }
};

