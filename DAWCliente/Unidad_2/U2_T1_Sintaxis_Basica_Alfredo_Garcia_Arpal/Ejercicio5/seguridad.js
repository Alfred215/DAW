function comprobar(){
    var password = document.getElementsByTagName("password");
    var contador=0;
    var seguro=[];
    var ex1 = /\w{8,16}/;
    var ex2 = /[A-Z]+/;
    var ex3 = /[a-z]+/;
    var ex4 = /[0-9]+/;
    var ex5 = /[-_@#$%&]+/
    for(var i=0;i<5;i++){
        switch(i){
            case 0:
                if(ex1.test(password)){
                    contador++;
                }else{
                    seguro[0]="No cumple con el rango de caracteres (8-16)";
                }
                break;
            case 1:
                if(ex2.test(password)){
                    contador++;
                }else{
                    seguro[1]="No hay mayuscula";
                }
                break;
            case 2:
                if(ex3.test(password)){
                    contador++;
                }else{
                    seguro[2]="No hay minuscula";
                }
                break;
            case 3:
                if(ex4.test(password)){
                    contador++;
                }else{
                    seguro[3]="No contiene un digito";
                }
                break;
            case 4:
                if(ex5.test(password)){
                    contador++;
                }else{
                    seguro[4]="la contraseña no contiene al menos _,@,#,%,& o $";
                }
                break;    
        }
    }
    if(contador==5){
        alert("La contraseña es segura");
    }else{
        alert("Tendra que escribir otra contraseña más segura");
        for(var i=0;i<seguro.length;i++){
            if(seguro[i]!=null){
                alert(seguro[i]);
            }   
        }
    }
}
