let opcao = ""

do {
  opcao = prompt(
    "Calculadora Geométrica\n" +
    "1. Área do triângulo: \n" +
    "2. Área do do retângulo: \n" +
    "3. Área do quadrado: \n" +
    "4. Área do trapézio: \n" +
    "5. Área do circulo: \n" +
    "6. Sair. " 
  )

  switch (opcao) {
    case "1" :
      function triangulo() {
        let baseT = prompt("Qual tamanho da base do triângulo: ")
        let alturaT = prompt("Qual tamanho da altura do triângulo: ")
        let resultadoT = baseT * alturaT / 2
        alert("A área do triângulo: " + resultadoT)
        return
      }

      triangulo()
    break
    case "2" :
      function retângulo() {
        let baseR = prompt("Qual tamanho da base do retângulo: ")
        let alturaR = prompt("Qual tamanho da altura do retângulo: ")
        let resultadoR = baseR * alturaR 
        alert("A área do retângulo: " + resultadoR)
        return
      }

      retângulo()
    break
    case "3" :
      function quadrado() {
        let lado = prompt("Qual tamanho do lado do quadrado: ")
        let resultadoQ = lado * lado
        alert("A área do quadrado: " + resultadoQ)
        return
      }

      quadrado()
    break
    case "4" :
      function trapezio() {
        let baseMaior = prompt("Qual tamanho da base maior do trapézio: ")
        let baseMenor = prompt("Qual tamanho da base menor do trapézio: ")
        let alturaTrapezio = prompt("Qual altura do trapézio: ")
        let resultadoTrapezio = (baseMaior + baseMenor) * alturaTrapezio / 2
        alert("A área do trapézio: "+ resultadoTrapezio)
        return
      }
    break
    case "5" :
      function circulo() {
        let raio = prompt("Qual tamanho do lado do raio do circulo: ")
        let resultadoC = 3.14 * (raio * raio)
        alert("A área do circulo: " + resultadoC)
        return
      }

      circulo()
    break
    case "6" :
      alert("Encerrando...")
    break
    default : 
    alert("Opção invalida!")
    break
  }

} while (opcao !== '6')