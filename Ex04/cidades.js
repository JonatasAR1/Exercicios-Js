let nomeT = prompt("Digite seu nome: ")
let cidadeV = prompt("Você já visitou alguma cidade ? (S/N)")
let visitadas = ""

while(cidadeV === "S") {
  let cidade = prompt("Qual cidade você já visitou: ")
  visitadas += "- "+ cidade +"\n"
  cidadeV = prompt("Você já visitou mais alguma cidade ? (S/N)")
}

alert(
  "Nome: "+nomeT+
  "\nCidades visitadas: \n"+
  visitadas
)