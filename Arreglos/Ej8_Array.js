var myArrayNumeros = [];
 function enviar(){
  myArrayNumeros.push(document.getElementById('num').value);
  document.getElementById('num').value='';
  document.getElementById('num').focus();
}

function listarNumeros(){
    console.log(myArrayNumeros);
    var salida='';
    for(var i=0; i<=myArrayNumeros.length-1; i++){
        salida+='<tr><td>'+myArrayNumeros[i]+'</td></tr>';
    }
    document.getElementById('cuerpo').innerHTML=salida;
    sumarNumero();
}

function sumarNumero(){
  var salida1='';
  var sum=0;
  var numMayor=parseInt(myArrayNumeros[0]);
  for (i in myArrayNumeros){
    sum+= parseInt(myArrayNumeros[i])  ;
    if(parseInt(myArrayNumeros[i])>numMayor){
      numMayor=parseInt(myArrayNumeros[i]);
    }
  }
   
   salida1+= '<tr><td>'+"SUMA"+'</td><td>'+sum+'</td></tr>';
   salida1+= '<tr><td>'+"NUMERO MAYOR DEL ARREGLO"+'</td><td>'+numMayor+'</td></tr>';
   document.getElementById('otroCuerpo').innerHTML=salida1;
}