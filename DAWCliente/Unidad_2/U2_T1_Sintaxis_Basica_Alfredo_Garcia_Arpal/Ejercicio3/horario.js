var deportes = ["Aerobic","Ciclismo","Yoga","KickBoxing","Crossfit","Karate","Sgrima","Sumo","Aquagym","Zumba","Body combat","Body pump","Spinning","Xcore"];
var hora1 = 7;
var hora2 = 8;
document.write("<table border='1'>");
document.write("<tr><th></th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th></tr>");
for(var a =0;a<14;a++){
    document.write("<tr><th>"+(hora1+a)+":00 - "+(hora2+a)+":00 </th>");
    for(var i = 0; i<6;i++){
    document.write("<th>"+deportes[a]+"</th>");
    }
    document.write("</tr>")
}
document.write("</table><br><br>");

var trabajadores=["Alberto","Alfonso","Sonia","Maria","Javier","Adrian","Segio","Elena","Sandra","Daniel"];
var hora = ["10:00 - 10:45","10:45 - 11:30","11:30 - 12:15","12:15 - 13:00","13:00 - 13:45","17:00 - 17:45","17:45 - 18:30","18:30 - 19:15","19:15 -20:00","20:00 - 20:45"];
document.write("</table>");
document.write("<table border='1'>");
document.write("<tr><th></th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr>");
for(var a =0;a<10;a++){
    document.write("<tr><th>"+hora[a]+"</th>");
    for(var i = 0; i<5;i++){
    document.write("<th>"+trabajadores[a]+"</th>");
    }
    document.write("</tr>")
}
document.write("</table>");
