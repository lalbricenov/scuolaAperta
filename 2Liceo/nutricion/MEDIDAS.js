let altura;
do{
    altura=parseFloat(prompt("Ingrese su altura (m)"))
}while(isNaN(altura) || altura <= 0)
console.log(altura);
let masa
do{
    masa=parseFloat(prompt("ingrese su masa (kg)"))
}while(isNaN(masa)|| masa <=0)
console.log(masa)
