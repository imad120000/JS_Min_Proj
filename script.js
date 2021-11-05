function clearScreen() {
    document.getElementById("result").value = "";
   }
function applique(value) {
    document.getElementById("result").value += value;
}
/*function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;*/
    var a ;
    var b ;
    var operation;
    
function plus() {
    operation="+";
    a=parseInt(document.getElementById("result").value) ;
    clearScreen();
}
function Moin() {
    operation="-";  
    a=parseInt(document.getElementById("result").value) ;
    clearScreen();
}
function Mult() {
    operation="*";  
    a=parseInt(document.getElementById("result").value) ;
    clearScreen();
}
function Division() {
    operation="/";  
    a=parseInt(document.getElementById("result").value) ;
    clearScreen();
}

function calculate() {
       switch (operation) {
            case "+":
                b=parseInt(document.getElementById("result").value);
                document.getElementById("result").value=parseInt(a+b);
            break;
            case "-":
                b=parseInt(document.getElementById("result").value);
                document.getElementById("result").value=parseInt(a-b);
            break;
            case "*":
                b=parseInt(document.getElementById("result").value);
                document.getElementById("result").value=parseInt(a*b);
            break;
            case "/":
                b=parseInt(document.getElementById("result").value);
                document.getElementById("result").value=parseInt(a/b);
            break;
       }
          
}
   
