export class DOM {
    static showNews(array) {
        const ul = document.querySelector("ul")

        array.forEach((noticia) => {
            const li = document.createElement("li")
            li.classList.add("li")
            const divTexto = document.createElement("div")
            divTexto.classList.add("divTexto")
           const divImagem = document.createElement("div")
           divImagem.classList.add("divImagem")
           const img = document.createElement ("img")
           img.classList.add("img")
           const divCategoria = document.createElement ("p")
           divCategoria.classList.add("divCategoria")
           const textoCategoria = document.createElement ("p")
           textoCategoria.classList.add("textoCategoria")
           const textoTitulo = document.createElement("p")
           textoTitulo.classList.add("textoTitulo")
           const textoResumo = document.createElement("p")
           textoResumo.classList.add("textoResumo")
           const textoFonte = document.createElement("p")
           textoFonte.classList.add("textoFonte")

           img.src = noticia.imagem
           textoCategoria.innerText = noticia.categoria
           textoTitulo.innerText = noticia.titulo
           textoResumo.innerText = noticia.resumo
           textoFonte.innerText = "Fonte: " + noticia.fonte
         
            ul.appendChild(li)
            li.appendChild(divImagem)
            divImagem.appendChild(img)
            li.appendChild(divTexto)
            divTexto.appendChild(divCategoria)
            divCategoria.appendChild(textoCategoria)
            divTexto.appendChild(textoTitulo)
            divTexto.appendChild(textoResumo)
            divTexto.appendChild(textoFonte)


        });
    }
}