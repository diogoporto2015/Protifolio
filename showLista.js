function showLista(lista, buttom = "all") {
    lista.forEach((item) => {
        item.classList.remove('ativo');
    });
    if (buttom == 'design') {
        lista[5].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}
