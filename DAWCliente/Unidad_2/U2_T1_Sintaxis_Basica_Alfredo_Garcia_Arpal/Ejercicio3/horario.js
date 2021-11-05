var deportes = ["Aerobic","Ciclismo","Yoga","KickBoxing","Crossfit","Karate","Sgrima","Sumo","Aquagym","Zumba","Body combat","Body pump","Spinning","Xcore"];
for(var a=1;a<15;a++){
    for(var i = 0; i<6;i++){
        var elemento = document.createElement("td");
        var texto = document.createTextNode(deportes[a]) 
        elemento.appendChild(texto);   
        var lista = document.getElementById(a);
        lista.appendChild(elemento); 
    }   
}  

for(var b=15;b<25;b++){
    var fisios = ["Alfredo","Alfredo","Maria","Maria","Sonia","Sonia","Alberto","Alberto","Sergio","Sergio"];
    for(var j = 0; j<5;j++){
        var elemento = document.createElement("td");
        var texto = document.createTextNode(fisios[(b-15)]) 
        elemento.appendChild(texto);   
        var lista = document.getElementById(b);
        lista.appendChild(elemento); 
    }   
}  
