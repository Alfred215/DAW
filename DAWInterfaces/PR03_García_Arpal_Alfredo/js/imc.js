function calcularIMC(){
    for(var i=1;i<9;i++){
        document.getElementById(i).style.color="black";
    }
    var peso = parseInt(document.getElementById('peso').value);
    var altura =  parseInt(document.getElementById('altura').value);
    if(peso<300 && altura<260){
         var altura2 = Math.pow((altura/100),2);
    var imc = peso/altura2;
    mostrar(imc); 
    }else{
        alert("Introduzca unos datos reales")
    }
       
}

function mostrar(calculo){
    if(calculo<16){
        document.getElementById('muestra').innerHTML="Infrapeso (delgadez severa) "+calculo;
        document.getElementById('1').style.color="red";
    }else if(calculo>=16 && calculo<17){
        document.getElementById('muestra').innerHTML="Infrapeso (delgadez moderada) "+calculo;
        document.getElementById('2').style.color="red";
    }else if(calculo>=17 && calculo<18.50){
        document.getElementById('muestra').innerHTML="Infrapeso (delgadez aceptable) "+calculo;
        document.getElementById('3').style.color="red";
    }else if(calculo>18.50 && calculo<25){
        document.getElementById('muestra').innerHTML="Peso normal "+calculo;
        document.getElementById('4').style.color="red";
    }else if(calculo>=25 && calculo<30){
        document.getElementById('muestra').innerHTML="Sobrepeso "+calculo;
        document.getElementById('5').style.color="red";
    }else if(calculo>=30 && calculo<35){
        document.getElementById('muestra').innerHTML="Obeso (Tipo I) "+calculo;
        document.getElementById('6').style.color="red";
    }else if(calculo>=35 && calculo<40){
        document.getElementById('muestra').innerHTML="Obeso (Tipo II) "+calculo;
        document.getElementById('7').style.color="red";
    }else if(calculo>=40){
        document.getElementById('muestra').innerHTML="Obeso (Tipo III) "+calculo;
        document.getElementById('8').style.color="red";
    }
}