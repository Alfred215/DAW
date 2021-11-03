function calcular(){
    var edad = parseInt(document.getElementById('edad').value);
    var sexo = document.getElementById('sexo').value;

    if(sexo=="Hombre" || sexo=="Mujer"){
        if(edad<=120){
            var fcm = 220-edad;
            document.write("<h2> Edad: "+edad+" Sexo: "+sexo+"</h2>");
            document.write("<ul>");
            document.write("<li>Zona de recuperación (60% - 70%)"+((fcm*60)/100)+" - "+((fcm*70)/100))+"</li>";
            document.write("<li>Zona de aeróbica (70% - 80%)"+((fcm*70)/100)+" - "+((fcm*80)/100))+"</li>";
            document.write("<li>Zona de anaeróbica (80% - 90%)"+((fcm*80)/100)+" - "+((fcm*90)/100))+"</li>";
            document.write("<li>Línea roja (90% - 100%)"+((fcm*90)/100)+" - "+((fcm*100)/100))+"</li>";
            document.write("</ul>");
        }
    }else{
        alert("Escriba: Mujer o Hombre")
    }
            
}

