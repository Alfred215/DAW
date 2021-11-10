function comprobar(){
    var password = document.getElementById('valor').value;
    var contador=0;
    var seguro=[];
    for(var i=0;i<5;i++){
        switch(i){
            case 0:
                if(password.length>=8 && password.length<=16){
                    contador++;
                }else{
                    seguro[0]="No cumple con el rango de caracteres (8-16)";
                }
                break;
            case 1:
                var ex2 = /[A-Z]/;
                if(ex2.test(password)){
                    contador++;
                }else{
                    seguro[1]="No hay mayuscula";
                }
                break;
            case 2:
                var ex3 = /[a-z]/;
                if(ex3.test(password)){
                    contador++;
                }else{
                    seguro[2]="No hay minuscula";
                }
                break;
            case 3:
                var ex4 = /[0-9]/;
                if(ex4.test(password)){
                    contador++;
                }else{
                    seguro[3]="No contiene un digito";
                }
                break;
            case 4:
                var ex5 = /\W/;
                if(ex5.test(password)){
                    contador++;
                }else{
                    seguro[4]="la contraseña no contiene al menos _,@,#,%,& o $";
                }
                break;    
        }
    }
    if(contador==5){
        alert("La contraseña es segura: "+password);
    }else{
        alert("Tendra que escribir otra contraseña más segura");
        for(var i=0;i<seguro.length;i++){
            if(seguro[i]!=null){
                alert(seguro[i]);
            }   
        }
    }
}
