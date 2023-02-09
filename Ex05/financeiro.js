let quantidadeI = parseInt(prompt("Quantidade disponível de dinheiro: "))
let adicionar
let remover

let opcao

do {
  opcao = prompt(
    "Quantidade disponível: "+quantidadeI+
    "\na) Adicionar "+
    "\nb) Remover "+
    "\nc) Sair "
    )

  switch (opcao) {
    case "a" :
      adicionar = parseInt(prompt("Quanto você deseja adicionar: "))
      quantidadeI += adicionar
      alert("Você agora tem o total de "+quantidadeI)
    break
    case "b" :
      adicionar = parseInt(prompt("Quanto você deseja remover: "))
      quantidadeI -= remover
      alert("Você agora tem o total de "+quantidadeI)
    break
    case "c" :
      alert("Saindo...")
    break 
    default :
    alert("Entrada invalida !")
  }
} while (opcao != "c")

alert("Encerrando...")

