let opcao

do {
    opcao = prompt(
    "Escolha uma das opções abaixo: \n"+
    "a) Primeira opção\n"+
    "b) Segunda opção\n"+
    "c) Terceira opção\n"+
    "d) Quarta opção\n"+
    "e) Encerrando\n"
  )

  switch (opcao) { 
    case "a" :
      alert("Você escolheu a primeira opção")
    break
    case "b" :
      alert("Você escolheu a segunda opção")
    break
    case "c" :
      alert("Você escolheu a terceira opção")
    break
    case "d" :
      alert("Você escolheu a quarta opção")
    break
  }
} while (opcao != "e")

alert("Encerrando...")
