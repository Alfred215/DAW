var deportes = ["Aerobic","Ciclismo","Yoga","KickBoxing","Crossfit","Karate","Sgrima","Sumo","Aquagym","Zumba","Body combat","Body pump","Spinning","Xcore"];
var nombre = ["Alfredo","Alfredo","Maria","Maria","Sergio","Sergio","Marta","Marta","Adrian","Adrian"];
for(var a=1;a<15;a++){
    for(var i = 0; i<6;i++){
        var elemento = document.createElement("td");
        var texto = document.createTextNode(deportes[a]) 
        elemento.appendChild(texto);   
        var lista = document.getElementById(a);
        lista.appendChild(elemento); 
    }   
}  

for(var a=15;a<25;a++){
    for(var i = 0; i<5;i++){
        var elemento = document.createElement("td");
        var texto = document.createTextNode(nombre[a]) 
        elemento.appendChild(texto);   
        var lista = document.getElementById(a);
        lista.appendChild(elemento); 
    }   
}  
