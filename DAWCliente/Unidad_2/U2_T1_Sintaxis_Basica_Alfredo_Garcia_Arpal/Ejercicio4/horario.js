function crear(){
    var deportes = ["Aerobic","Ciclismo","Yoga","KickBoxing","Crossfit","Karate","Sgrima"];
    for(var a=1;a<8;a++){
        for(var i = 0; i<6;i++){
            var elemento = document.createElement("td");

            var texto = document.createTextNode(deportes[a-1]) 
            elemento.appendChild(texto);   
            var lista = document.getElementById("deporte"+a);
            lista.appendChild(elemento); 
        }   
    }    

    var fisios = ["Alfredo","Alfredo","Maria","Maria","Sonia","Sonia","Alberto","Alberto","Sergio","Sergio"];
    for(var b=1;b<11;b++){
        for(var j = 0; j<5;j++){
            var elemento = document.createElement("td");
            var texto = document.createTextNode(fisios[(b-1)]) 
            elemento.appendChild(texto);   
            var lista = document.getElementById("fisio"+b);
            lista.appendChild(elemento); 
        }   
    }      
}

function resaltarActividad(){
    var  seleccionar  =  [];
    var  actividad  =  document.getElementsByName("deportes");
    var  table1  =  document.getElementById("table1");
    var  celdas  =  table1.getElementsByTagName('td');

    for(var i=0;i<actividad.length;i++) {
        if( actividad[i].checked==true) {
            seleccionar.push(actividad[i].value)
        }
    }

    for(var i=0;i<=celdas.length-1;i++) {
        for(var j=0;j<=seleccionar.length-1;j++) {
            if ( celdas[i].innerHTML==seleccionar[j]) {
                celdas[i].style.backgroundColor ="green";
            }
        }
    }
}

function resaltarFisio(){
    var seleccion="";
    var fisio = document.getElementsByName("fisio");
    var table2 = document.getElementById("table2");
    var celdas = table2.getElementsByTagName('td');

    for(var i=0;i<fisio.length;i++){
        if(fisio[i].checked==true){
            seleccion= fisio[i].value;
        }
    }

    for(var i=0;i<5;i++){
        for(var j=0;j<celdas.length-1;j++){
            if(celdas[j].innerHTML==seleccion){
                celdas[j].style.backgroundColor="green";
            }else{
                celdas[j].style.backgroundColor="white";
            }
        }
    }
}


