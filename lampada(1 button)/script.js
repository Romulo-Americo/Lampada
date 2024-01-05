const ligaDesliga =() =>{
    let lampada = document.getElementById("lampada");
    let text = document.getElementById("button");

    if(lampada.src.endsWith('desligada.jpg')){
        lampada.src = "assets/ligada.jpg"
        text.innerText = "Desliga";
    }else if(lampada.src.endsWith('ligada.jpg')){
        lampada.src = "assets/desligada.jpg"
    }

}