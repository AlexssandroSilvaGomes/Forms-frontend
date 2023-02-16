'use strict'

const calcular = document.getElementById('calcular')

function media() {
    const nota1 = document.getElementById('nota1').value.replace(",", ".")
    const nota2 = document.getElementById('nota2').value.replace(",", ".")

    if (isNaN(nota1) || isNaN(nota2)) {
        alert('Erro: As caixas precisam conter um valor numérico!')
    } else if (nota1 == '' || nota2 == '') {
        alert('Erro: As caixas das notas não podem estar vazias!')
    } else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert('Erro: As notas só podem ir de 0 a 10!')
    } else {
        const media = (parseFloat(nota1) + parseFloat(nota2)) / 2
        const situacao = document.getElementById('situacao')
        const formulario = document.getElementById('formulario')
        const aprovado = 'aprovado'
        const aprovadoInput = 'aprovado-input'
        const reprovado = 'reprovado'
        const reprovadoInput = 'reprovado-input'
        if (media >= 7) {
            situacao.value = aprovado
            formulario.classList.remove('reprovado')
            formulario.classList.add('aprovado')
        } else {
            situacao.value = reprovado
            formulario.classList.add('reprovado')
            formulario.classList.remove('aprovado')
            nota1.classList.add('reprovadoInput')
            nota1.classList.remove('aprovadoInput')
            nota2.classList.add('reprovadoInput')
            nota2.classList.remove('aprovadoInput')
        }

        if (nota1 >= 7) {
            nota1.classList.remove('reprovadoInput')
            nota1.classList.add('aprovadoInput')
            
        } else {
            nota1.classList.add('reprovadoInput')
            nota1.classList.remove('aprovadoInput')
        }

        if (nota2 >= 7) {
            nota2.classList.remove('reprovadoInput')
            nota2.classList.add('aprovadoInput')
        } else {
            nota2.classList.add('reprovadoInput')
            nota2.classList.remove('aprovadoInput')
        }

    }
}

calcular.addEventListener('click', media)




/*
function somar() {
    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)
    const resultado = document.getElementById('situacao')
    const formulario = document.getElementById('formulario')

    const soma = numero1 + numero2

    resultado.value = soma
    formulario.classList.add('sombreamento')
}

calcular.addEventListener('click', somar)
*/