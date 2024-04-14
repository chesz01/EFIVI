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

perg_resp = {
    "Onde se localiza a ong EFIVI ?": "Rua Octávio Alves de Araujo, 68 - Tarraf II - Catanduva - SP",
    "O que a EFIVI faz ?": "Reciclamos material eletro/eletrônico, montamos e doamos computadores adaptados para deficientes visuais e lecionamos cursos de eletrônica totalmente gratuito em nossa cede.",
    "Qual o propósito da ong EFIVI ?": "Impactar positivamente o meio ambiente e integrar o deficiente visual no mundo digital.",
    "Como a ong se mantem ?": "Componentes que não podem ser recuperados são desmontados e vendidos.",
    "QUais principais atividades da ong ?": "Coleta, manutenção e doação de eletrônicos, suporte para entidades parceiras e disponibilização de cursos.",
    "Qual o impacto da reciclaem de eletrônicos ?": "aucelora",
}

//=======================================================

//=======================================================

//=======================================================