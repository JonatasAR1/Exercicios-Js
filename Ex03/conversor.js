let metros = parseFloat(prompt("Digite um número em metros: "))
let conversorM = prompt(
  "Para qual unidade quer que seja convertido: \n"+
  "a) milímetro (mm)\n"+
  "b) centímetro (cm)\n"+
  "c) decímetro (dm)\n"+
  "d) decâmetro (dam)\n"+
  "e) hectômetro (hm)\n"+
  "f) quilômetro (km)\n"
  )

let resultado

switch (conversorM) {
  case 'a':
    resultado = metros * 1000
    alert("O valor convertido para milímetros é "+resultado)
  break
  case 'b':
    resultado = metros * 100
    alert("O valor convertido para centímetro é "+resultado)
  break
  case 'c':
    resultado = metros * 10
    alert("O valor convertido para decímetro é "+resultado)
  break
  case 'd':
    resultado = metros / 0.1
    alert("O valor convertido para decâmetro é "+resultado)
  break
  case 'e':
    resultado = metros / 0.01
    alert("O valor convertido para hectômetro é "+resultado)
  break
  case 'f':
    resultado = metros / 0.001
    alert("O valor convertido para quilômetro é "+resultado)
  break
  default: 
  alert("Opção inválida...")
}