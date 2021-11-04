function calcular(){
    var edad = parseInt(document.getElementById('edad').value);
    var sexo = document.getElementById('sexo').value;

    if(sexo=="Hombre" || sexo=="Mujer"){
        if(edad<=120){
            var fcm = 220-edad;
            document.getElementById("h2").innerHTML="Edad: "+edad+" Sexo: "+sexo+" FCM: "+fcm;
            document.getElementById("1").innerHTML="Zona de recuperación (60% - 70%) "+((fcm*60)/100)+" - "+((fcm*70)/100);
            document.getElementById("2").innerHTML="Zona de aeróbica (70% - 80%) "+((fcm*70)/100)+" - "+((fcm*80)/100);
            document.getElementById("3").innerHTML="Zona de anaeróbica (80% - 90%) "+((fcm*80)/100)+" - "+((fcm*90)/100);
            document.getElementById("4").innerHTML="Línea roja (90% - 100%) "+((fcm*90)/100)+" - "+((fcm*100)/100);
        }
    }else{
        alert("Escriba: Mujer o Hombre")
    }
            
}

