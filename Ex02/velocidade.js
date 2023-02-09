let vel1 = parseFloat(prompt("Digite a velocidade do primeiro veículo: "))
let vel2 = parseFloat(prompt("Digite a velocidade do segundo veículo: "))

if(vel1 > vel2) {
  alert("O primeiro veículo teve atingiu a velocidade de "+vel1+".")
} else if (vel2 > vel1) {
  alert("O segundo veículo teve atingiu a velocidade de "+vel2+".")
} else if (vel1 == vel2) {
  alert("Os dois veículos tiveram a mesma velocidade!")
}