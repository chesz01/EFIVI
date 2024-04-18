//=======================================================MENU HAMBURGUER
const hamButton = document.getElementById('hamb');
const menu = document.querySelector('.menu');
const hamburg = document.querySelector('.h-img');
const x = document.querySelector('.x-img');

hamButton.addEventListener('click', function() {
    menu.classList.toggle('show');

    hamburg.classList.toggle('hiden');
    x.classList.toggle('hiden');
});

//=======================================================DUVIDAS

const acordeonItens = document.querySelectorAll('.acord-item');

acordeonItens.forEach(item => {
    const pergunta = item.querySelector('.pergunta');
    const resposta = item.querySelector('.resposta');

    pergunta.addEventListener('click', () => {
        acordeonItens.forEach(novoItem => {
            const novaResposta = novoItem.querySelector('.resposta');
            if (novaResposta != resposta) {
                novaResposta.classList.remove('active');
            }
        });
        resposta.classList.toggle('active')
    });
});

//=======================================================

//=======================================================

//=======================================================