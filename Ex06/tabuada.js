let n1 = Number(prompt("Digite um número para multiplicar de 1 a 20: "))

let resultado

for (let indice = 0; indice <= 20; indice++) {
  let resultado = n1 * indice
  console.log(
    n1 + "x" + indice + " = "+ resultado
  )
}