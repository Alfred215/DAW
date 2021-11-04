var deportes = ["Aerobic","Ciclismo","Yoga","KickBoxing","Crossfit","Karate","Sgrima","Sumo","Aquagym","Zumba","Body combat","Body pump","Spinning","Xcore"];

for(var a =1;a<15;a++){
    var elemento= document.createElement("th");
    var lista = document.getElementById(a);
    for(var i = 0; i<6;i++){
    document.write("<th>"+deportes[a]+"</th>");
    }
}

