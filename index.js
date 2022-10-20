const abas= document.querySelectorAll(".aba");
abas.forEach(aba=>{
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInfoAbas(aba)
    })
})
        
function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado")
}
        
function mostrarInfoAbas (aba){
    const infoSelecionada= document.
    querySelector(".info.selecionado");
    infoSelecionada.classList.remove
    ("selecionado");
        
     const idInfosdaAba= `info-${aba.id}`
    const infoMostrada = document.
    getElementById(idInfosdaAba)
    infoMostrada.classList.add("selecionado")
}
