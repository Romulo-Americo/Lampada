

const liga = () =>{
    let ligando = document.getElementById("lampada");
    if(ligando.src.endsWith('desligada.jpg')){
        ligando.src = 'assets/ligada.jpg';
    }
};

const desliga = () => {
    let desligando = document.getElementById("lampada");
    if (desligando.src.endsWith('ligada.jpg')) {
        desligando.src = 'assets/desligada.jpg';
    }
};

