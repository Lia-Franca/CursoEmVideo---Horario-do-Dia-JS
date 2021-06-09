function exibeHora() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 6) {
        //BOA MADRUGADA
        img.innerHTML = '<img src=madrugada.jpg class="rounded-circle" width="200" height="200">'
        document.body.style.background = '#000000'
    } else if (hora > 6 && hora < 12) {
        //BOM DIA
        img.innerHTML = '<img src=manha.jpg class="rounded-circle" width="200" height="200">'
        document.body.style.background = '#F6D1BE'
    } else if (hora > 12 && hora <= 18) {
        //BOA TARDE
        img.innerHTML = '<img src=tarde.jpg class="rounded-circle" width="200" height="200">'
       document.body.style.background =  '#D8A7CD'
    } else {
        //BOA NOITE
        img.innerHTML = '<img src=noite.jpg class="rounded-circle" width="200" height="200">'
        document.body.style.background = '#271D43'
    }
}

