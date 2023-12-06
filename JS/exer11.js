function calcular(){
    let valor = document.querySelector('input#valor') // Pega valor digitado no input
    let res = document.querySelector('div#resultado') // Pega div (onde deve inserir resultado)
    let vfinal = valor.value // Pega o valor pra poder fazer a operação matemática

    res.innerHTML = ''
        
    for(let y = 1; y <= 10; y++) {
    
    let divisao = (vfinal / y).toFixed(2)
    //document.write( y + ' x ' +valor.value+ ' = ' + (y * valor.value) + '<br>')
    res.innerHTML += `${y} x de R$: ${divisao}<br/>`

    }
  }