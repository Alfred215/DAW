var array = ["Aerobic","Ciclismo","Yoga","KickBoxing","Crossfit","Karate","Sgrima","Sumo","Aquagym","Zumba","Body combat","Body pump","Spinning","Xcore"];
var hora1 = 7;
var hora2 = 8;
document.write("<table border='1'>");
document.write("<tr><th></th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th></tr>");
for(var a =0;a<14;a++){
    document.write("<tr><th>"+(hora1+a)+":00 - "+(hora2+a)+":00 </th>");
    for(var i = 0; i<6;i++){
    document.write("<th>"+array[a]+"</th>");
    }
    document.write("</tr>")
}
document.write("</table>");

document.write("<table border='1'>");
document.write("<tr><th></th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th></tr>");
for(var a =0;a<14;a++){
    document.write("<tr><th>"+(hora1+a)+":00 - "+(hora2+a)+":00 </th>");
    for(var i = 0; i<6;i++){
    document.write("<th>"+array[a]+"</th>");
    }
    document.write("</tr>")
}
document.write("</table>");
