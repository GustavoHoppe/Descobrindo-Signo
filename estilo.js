function calcular() {
    
    let nome = document.getElementById('txtnome')
    let mes = document.getElementById('txtmes')
    let dia = document.getElementById('txtdia')
    let resposta = document.getElementById('txtres')
    let m = Number(mes.value)
    let d = Number(dia.value)
    let n = String(nome.value)
    
    if (nome.value.length == 0 || mes.value.length == 0 || dia.value.length == 0) {
        window.alert('ERRO! Faltando informações!')
        resposta.innerHTML = 'Confira os dados e tente novamente!'
    } else if (m < 1 || m > 12) {
        window.alert('ERRO! Você deve inserir um mês válido')
        resposta.innerHTML = 'Coloque um mês válido!'
    } else if (d > 31 || d <= 0) {
        window.alert('ERRO! Você deve inserir um dia válido')
        resposta.innerHTML = 'Coloque um dia válido!'
    } else if (m == 3 && d >= 21 || m == 4 && d <=20) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Áries</strong>!`
        document.getElementById('img').src = "./img/aries.png"
    } else if (m == 4 && d >= 21 || m == 5 && d <= 20) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Touro</strong>!`
        document.getElementById('img').src = "./img/touro.png"    
    } else if (m == 5 && d >= 21 || m == 6 && d <= 20) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Gêmeos</strong>!`
        document.getElementById('img').src = "./img/gemeos.png"
    } else if (m == 6 && d >= 21 || m == 7 && d <= 21) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Câncer</strong>!`
        document.getElementById('img').src = "./img/cancer.png"
    } else if (m == 7 && d >= 22 || m == 8 && d <= 22) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Leão</strong>!`
        document.getElementById('img').src = "./img/leao.png"
    } else if (m == 8 && d >= 23 || m == 9 && d <= 22) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Virgem</strong>!`
        document.getElementById('img').src = "./img/virgem.png"
    } else if (m == 9 && d >= 23 || m == 10 && d <= 22) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Libra</strong>!`
        document.getElementById('img').src = "./img/libra.png"
    } else if (m == 10 && d >= 23 || m == 11 && d <= 21) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Escorpião</strong>!`
        document.getElementById('img').src = "./img/escorpiao.png"
    } else if (m == 11 && d >= 22 || m == 12 && d <= 21) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Sagitário</strong>!`
        document.getElementById('img').src = "./img/sagitario.png"
    } else if (m == 12 && d >= 22 || m == 1 && d <= 20) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Capricórnio</strong>!`
        document.getElementById('img').src = "./img/capricornio.png"
    } else if (m == 1 && d >= 21 || m == 2 && d <= 19) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Aquário</strong>!`
        document.getElementById('img').src = "./img/aquario.png"
    } else if (m == 2 && d >= 20 || m == 3 && d <= 20) {
        resposta.innerHTML = `Olá ${n}! Seu signo é <strong>Peixes</strong>!`
        document.getElementById('img').src = "./img/peixe.png"
    }
}    
