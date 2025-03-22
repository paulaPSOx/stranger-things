// Seleciona todos os botões do carrossel e as imagens
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Adiciona um evento de clique para cada botão do carrossel
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado(); // Remove a seleção do botão anterior
        botao.classList.add('selecionado'); // Marca o botão atual como selecionado
        
        esconderImagemAtiva();
        mostrarImagemDeFundo(indice); // Exibe a nova imagem correspondente ao botão clicado
    });
});

// Função para exibir a imagem correspondente ao botão clicado
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

// Função para ocultar a imagem que está ativa no momento
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.imagem.ativa');
    if (imagemAtiva) {
        imagemAtiva.classList.remove('ativa');
    }
}

// Função para remover a seleção do botão atualmente selecionado
function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

// Função para atualizar as imagens de acordo com o tamanho da tela
function atualizarImagens() {
    const larguraTela = window.innerWidth; // Obter a largura da tela

    // Se a largura da tela for menor que 768px, carregue as imagens para dispositivos móveis
    if (larguraTela <= 585) {
        imagens[0].src = './src/imagens/wallpapers-stranger-things/logo-intro.png';
        imagens[1].src = './src/imagens/wallpapers-stranger-things/1.png';
        imagens[2].src = './src/imagens/wallpapers-stranger-things/2.png';
        imagens[3].src = './src/imagens/wallpapers-stranger-things/3.png';
        imagens[4].src = './src/imagens/wallpapers-stranger-things/4.png';
        imagens[5].src = './src/imagens/wallpapers-stranger-things/5.png';
        imagens[6].src = './src/imagens/wallpapers-stranger-things/logo-fim.png';
    } else {
        // Caso contrário, use as imagens para desktop
        imagens[0].src = './src/imagens/wallpapers-stranger-things/logotipo.gif';
        imagens[1].src = './src/imagens/wallpapers-stranger-things/season-1.png';
        imagens[2].src = './src/imagens/wallpapers-stranger-things/season-2.png';
        imagens[3].src = './src/imagens/wallpapers-stranger-things/season-3.png';
        imagens[4].src = './src/imagens/wallpapers-stranger-things/season-4.png';
        imagens[5].src = './src/imagens/wallpapers-stranger-things/season-5.png';
        imagens[6].src = './src/imagens/wallpapers-stranger-things/logotipo-pisca-pisca.png';
    }
}

// Inicializa as imagens ao carregar a página
atualizarImagens();

// Recarrega as imagens sempre que a janela for redimensionada
window.addEventListener('resize', atualizarImagens);

// Adiciona um evento de clique para cada botão do carrossel
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado(); // Remove a seleção do botão anterior
        botao.classList.add('selecionado'); // Marca o botão atual como selecionado
        
        esconderImagemAtiva();
        mostrarImagemDeFundo(indice); // Exibe a nova imagem correspondente ao botão clicado
    });
});

// Função para exibir a imagem correspondente ao botão clicado
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

// Função para ocultar a imagem que está ativa no momento
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.imagem.ativa');
    if (imagemAtiva) {
        imagemAtiva.classList.remove('ativa');
    }
}

// Função para remover a seleção do botão atualmente selecionado
function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}