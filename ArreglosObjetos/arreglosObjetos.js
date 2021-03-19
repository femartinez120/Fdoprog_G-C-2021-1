document.getElementById('act').style.display = 'none';
var myArrayEst= new Array();
var oEst={
    nom: null,
    ape: null,
    n1: null,
    n2: null,
    n3: null
}
var posEditar;
function agregar(){
    oEst.nom=document.getElementById('nom').value;
    oEst.ape=document.getElementById('ape').value;
    oEst.n1=parseFloat(document.getElementById('n1').value);
    oEst.n2=parseFloat(document.getElementById('n2').value);
    oEst.n3=parseFloat(document.getElementById('n3').value);
    let resultado= JSON.parse(JSON.stringify(oEst));
    myArrayEst.push(resultado);
    console.log(myArrayEst);
    limparCajas();
    listarEstudiantes();
}
function limparCajas(){
    document.getElementById('nom').value='';
    oEst.ape=document.getElementById('ape').value='';
    document.getElementById('n1').value='';
    document.getElementById('n2').value='';
    document.getElementById('n3').value='';
    document.getElementById('nom').focus();
}
function listarEstudiantes(){
    var salida='';
    for(i in myArrayEst){
        var notaFinal=nf(myArrayEst[i].n1,myArrayEst[i].n2,myArrayEst[i].n3);
        salida+='<tr><td>'+ myArrayEst[i].nom+'</td><td>'+myArrayEst[i].ape+'</td><td>'+myArrayEst[i].n1+'</td><td>'+myArrayEst[i].n2+'</td><td>'+myArrayEst[i].n3+'</td><td>'+notaFinal+'</td><td>'+'<button onclick="editar('+i+')">Editar</button>'+'<button>Eliminar</button>'+'</td></tr>';
    }
    document.getElementById('cuerpo').innerHTML=salida;
}
function nf(n1,n2,n3){
    return (n1+n2+n3)/3;
}
function editar(i){
    posEditar=i;
    document.getElementById('agr').style.display='none';
    document.getElementById('act').style.display = 'block';
    document.getElementById('nom').value=myArrayEst[i].nom;
    document.getElementById('ape').value=myArrayEst[i].ape;
    document.getElementById('n1').value=myArrayEst[i].n1;
    document.getElementById('n2').value=myArrayEst[i].n2;
    document.getElementById('n3').value=myArrayEst[i].n3;
}
function actualizar(){
    oEst.nom=document.getElementById('nom').value;
    oEst.ape=document.getElementById('ape').value;
    oEst.n1=parseFloat(document.getElementById('n1').value);
    oEst.n2=parseFloat(document.getElementById('n2').value);
    oEst.n3=parseFloat(document.getElementById('n3').value);
    let resultado= JSON.parse(JSON.stringify(oEst));
    myArrayEst[posEditar]=resultado;
    document.getElementById('act').style.display = 'none';
    document.getElementById('agr').style.display='block';
    listarEstudiantes();
    limparCajas();

}