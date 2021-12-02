function calcularFMC(){
    var edad = parseInt(document.getElementById('edad').value);
    var sexo = document.getElementById('sexo').value;

    if(sexo=="Hombre" || sexo=="Mujer"){
        if(edad<=120){
            var fcm = 220-edad;
            document.getElementById("h2").innerHTML="Edad: "+edad+" Sexo: "+sexo+" FCM: "+fcm;
            document.getElementById("9").innerHTML=((fcm*60)/100)+" - "+((fcm*70)/100);
            document.getElementById("10").innerHTML=((fcm*70)/100)+" - "+((fcm*80)/100);
            document.getElementById("11").innerHTML=((fcm*80)/100)+" - "+((fcm*90)/100);
            document.getElementById("12").innerHTML=((fcm*90)/100)+" - "+((fcm*100)/100);
        }
    }else{
        alert("Escriba: Mujer o Hombre")
    }
            
}

