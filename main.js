let etanol
let gasolina

function calcular() {
    etanol = document.getElementById('txtEtanol')
    gasolina = document.getElementById('txtGasolina')
    etanol = Number(etanol.value)
    gasolina = Number(gasolina.value)
   if (etanol < 0.7 * gasolina) {
        document.getElementsByTagName('img')[0].src="imagens/etanol.png"
   }else{
    document.getElementsByTagName('img')[0].src="imagens/gasolina.png"
   }
}

function limpar() {
    document.getElementsByTagName('img')[0].src = "imagens/neutro.png"
}