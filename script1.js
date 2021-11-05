
 function afficher(){
         //display --> le centenu visible ou pas par exmple :
         // dispaly:inline--> le centenu visible pour l'utilisateur et ecrit comme text
         //dispaly:none--> le centenu pas visible danc autre coter HIDDEN hidden
         // pour les sapm display fix danc c'est inline peut faire une condition qui fait l'oppiste pas inline . jm3e wtwi
         //document.getElementById("s").style.visibility="hidden";
         var a = document.getElementById("s");
         var b = document.getElementById("btn");

                
        if (a.style.display=="inline") {
                a.style.display="none";
                b.innerHTML="Read More";
                
        } else{
                a.style.display="inline";
                b.innerHTML="Read Less";
        }
        
 }