function desafio1Logico() {
    let escolha = document.getElementById("fibonacci")
    let ultimo = 1
    let penultimo = 0
    let pertence = false

    while (penultimo <= Number(escolha.value)) {
        if (penultimo === Number(escolha.value)) {
            pertence = true
            break
        }
        let numeroAtual = penultimo
        penultimo = ultimo
        ultimo = numeroAtual + ultimo
    }

    if (pertence) {
        alert(`Seu numero pertence à sequência de Fibonacci. \nNumero escolhido: ${Number(escolha.value)}`)
    } else if (!pertence) {
        alert(`Seu numero NÃO pertence à sequência de Fibonacci. \nNumero escolhido: ${Number(escolha.value)}`)
    }
}


function desafioLogico2() {
    let texto = document.getElementById("string").value
    let contagem = 0
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contagem++
        }
    }
    alert(`A letra "A" aparece ${contagem} vezes durante sua palavra/frase `)
}