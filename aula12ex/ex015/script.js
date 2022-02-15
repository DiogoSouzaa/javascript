function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var forAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (forAno.value.length == 0 || Number(forAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(forAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/crianca_hp.png')     
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/adolescente_hp.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/jovem_hp.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto_hp.png')
            } else {
                img.setAttribute('src', 'imagens/idoso_hp.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/crianca_mp.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/adolescente_mp.png') 
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/jovem_mp.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto_mp.png')
            } else {
                img.setAttribute('src', 'imagens/idoso_mp.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.append(img)
        
    }
}