document.getElementById("surpresa").addEventListener("click", function() {
    
});
document.addEventListener("DOMContentLoaded", function () {
    let botao = document.getElementById("surpresa");
    let modal = document.getElementById("modal");
    let modalImagem = document.getElementById("modal-imagem");
    let fechar = document.getElementById("fechar");

    // Lista de imagens (troque pelos caminhos corretos)
    let imagens = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png"
    ];

    let index = 0; // Índice da imagem atual
    let intervalo = null; // Guardar referência do setInterval

    function abrirModal() {
        modal.style.display = "flex"; // Exibir modal
        modalImagem.src = imagens[index]; // Mostrar primeira imagem

        // Inicia a troca de imagens a cada 3 segundos
        intervalo = setInterval(function () {
            index = (index + 1) % imagens.length;
            modalImagem.src = imagens[index];
        }, 3000);
    }

    function fecharModal() {
        modal.style.display = "none"; // Esconder modal
        clearInterval(intervalo); // Parar a troca de imagens
    }

    // Adicionar eventos para clique e toque no botão
    botao.addEventListener("click", abrirModal);
    botao.addEventListener("touchstart", abrirModal);

    // Fechar modal ao clicar no "X"
    fechar.addEventListener("click", fecharModal);
    fechar.addEventListener("touchstart", fecharModal);
});
// Espera até que o conteúdo da página seja carregado
document.addEventListener("DOMContentLoaded", function() {
    // Cria o elemento de áudio no JS
    var audio = new Audio("audio/musica.mp3"); // Caminho do arquivo de áudio

    // Inicia a reprodução da música automaticamente
    audio.play();

    // Adiciona um evento de clique no botão "Clique para uma surpresa"
    document.getElementById("surpresa").addEventListener("click", function() {
        // Quando o botão é clicado, a música é pausada ou tocada
        if (audio.paused) {
            audio.play(); // Inicia a música
        } else {
            audio.pause(); // Pausa a música
        }
    });
});
