let personagem1 = prompt("Digite o nome do personagem atacante: ")
let atk = parseFloat(prompt("Digite o poder de ataque: "))

let personagem2 = prompt("Digite o nome do personagem defensor: ")
let hp = parseFloat(prompt("Digite os pontos de vida: "))
let def = parseFloat(prompt("Digite o poder de defesa: "))
let shield = prompt("Seu personagem possui escudo? S/N: ")

let dano 

if (atk > def && shield === "N"){
  dano = (atk - def)
  hp = hp - dano
  alert("Dano causado por "+personagem1+" foi de"+dano+" e "+personagem2+" ficou com "+hp+" HP.")
  
} else if (atk > def && shield === "S" ) {
  dano = (atk - def) / 2
  hp = hp - dano
  alert("Dano causado por "+personagem1+" foi de"+dano+" e "+personagem2+" ficou com "+hp+" HP.")
} else if (atk < def) {
  alert("O dano causado foi 0.")
}