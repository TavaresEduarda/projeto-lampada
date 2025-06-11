// let lampada = document.getElementById("lampada")
let ligado = document.getElementById("acender")
// let botao = document.getElementById("botao")

function acenderApagar(){
    
    // lampada.src= "lampada-acesa.png"
   // ligado = false
 
    if (!ligado) {
      lampada.src = "lampada-acesa.png"
      botao.textContent = "apagar"
      ligado = true //quando "ligado" é "true", significa que a lâmpada está acesa.
    } else {
      lampada.src = "lampada-apagada.png"
      botao.textContent = "acender"//textConten alterar o texto visível de um elemento na página.
      ligado = false //Quando "ligado" é "false", significa que a lâmpada está apagada.
    }

}



