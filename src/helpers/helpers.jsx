export function mostrarNotificacao(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}

export function checarVitoria(certa, errada, palavra) {
    let status = 'vitoria';

    //verifica se venceu
    palavra.split('').forEach(letra => {
        if(!certa.includes(letra)){
            status = '';
        }
    })


    //verifica se perdeu
    if(errada.length == 6) status = 'derrota';

    return status;
}