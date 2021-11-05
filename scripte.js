//var c = document.getElementById("c1");
//First Methode
//var p = doument.getElementById("result");
function cleare(){
    var a = document.getElementById("re");
    a.value="";
}
function clicke(value){
    document.getElementById("re").value+=value;
}
function evale() {
    var p = document.getElementById("re").value;
    var q = eval(p);
    document.getElementById("re").value = q;
}

