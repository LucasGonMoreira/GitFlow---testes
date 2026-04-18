const botao = document.getElementById('acabou');
const som = new Audio('acabou.mp3');

botao.addEventListener('click', () => {
    alert("Aumente o Volume")
    som.currentTime = 0; // Reinicia o som se já estiver tocando
    som.play();
});