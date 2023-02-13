let baralho = []
let opcao = ""

do {
  opcao = prompt(
    "Cartas no baralho: " + baralho +
    "\n 1. Adicionar uma carta\n 2. Puxar uma carta\n 3. Sair "
  )

  switch (opcao) {
    case '1' :
      const novaCarta = prompt("Qual carta deseja adicionar ? ")
      baralho.push(novaCarta)
    break
    case '2' :
      const cartaPuxada = baralho.pop()
      
      if (!cartaPuxada) {
        alert("Não ha nenhuma carta no baralho!")
      } else {
        alert("Você puxou um(a) "+ cartaPuxada)
      }
    break
    case '3' :
      alert("Encerrando...")
    break
    default : 
      alert("Opção invalida! ")
  }
} while (opcao !== '3')