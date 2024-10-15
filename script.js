function toggleMode() { //metodo logico e mais longo//
    const html = document.documentElement
    html.classList.toggle('light') // se tiver o light ele tira se não tiver ele coloca o light//

//pegar tag img
    const img =document.querySelector("#profile img")

    //substituir imagem
    if(html.classList.contains('light')){
//se tiver light mode, adicionar a imagem light 
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
// se tiver sem light mode, manter imagem 
        img.setAttribute('src', './assets/avatar.png')
    }



//pegar tag img


//substituir imagem
//se tiver light mode, adicionar a imagem light 
// se tiver sem light mode, manter imagem 

}