let imoveis = []
let opcao = ""

do {

  opcao = prompt(
    "Imóveis: "+ imoveis.length +
    "\nEscolha uma opção: \n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )

  switch (opcao) {
    case '1' :
      const imovel = {}

      imovel.proprietario = prompt("Qual nome do proprietário: ")
      imovel.quarto = prompt("Quantos quartos possui o imóvel: ")
      imovel.banheiro = prompt("Quantos banheiros tem o imóvel: ")
      imovel.garagem = prompt("O imóvel possui garagem ? (Sim/Não) ")

      const confirma = confirm(
        "Salvar este imovel ? (Sim/Não)\n" +
        "Proprietário: " + imovel.proprietario +
        "Quarto: " + imovel.proprietario +
        "Banheiro: " + imovel.proprietario +
        "Garagem: " + imovel.proprietario 
      )

      if (confirma) {
        imoveis.push(imovel)
      }
    case '2' :
      for (let i = 0; i < imovel.length; i ++) {
        alert(
          "Imóvel: " + imoveis.lengt[i] +
          "\nProprietário: " + imoveis[i].proprietario +
          "\nQuarto: " + imoveis[i].quarto +
          "\nBanheiro: " + imoveis[i].banheiro +
          "\nGaragem: " + imoveis[i].garagem 
        )
      }
    case '3' :
      alert("Encerrando...")
    default :
      alert("Opção invalida!")
    break
  }

} while (opcao !== "3")