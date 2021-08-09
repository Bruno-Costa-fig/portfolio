const projects =
    [
        {
            "name": "Site Web - Modelo de Portfólio",
            "description": "O projeto consiste em um web site modelo de um portfólio para Devs",
            "link": "https://bruno-costa-fig.github.io/portifolioModel/",
            "icone": "fab fa-github",
            "stack": "HTML, CSS e JS"
        },
        {
            "name": "Api de controle de games",
            "description": "O projeto consiste em uma API de controle de estoques de games de uma loja. O template foi feito em HTML simples e foi integrado com Axios com o backend em Javascript com NodeJS",
            "link": "h􀆩ps://www.linkedin.com/posts/bruno-costa-figueiredo-b9b3141a2desenvolvimentoweb-javascript-nodejs-ac􀆟vity-6782438772911947776-fI7C",
            "icone": "fas fa-video",
            "stack": "HTML, CSS, JS, Node e Axios"
        },
        {
            "name": "Blog pessoal",
            "description": "Fiz um projeto de criação de um blog com NodeJs usando Express, MySQL e Sequelize como ORM e EJS como View Engine. O projeto teve como propósito o aprendizado sobre criação de rotas, manipulação de dados e renderização de páginas com HTML e dados dinâmicos. Utilizei ainda no projeto projeto o TinyMCE para criar um campo de criação/edição dos posts do blog.",
            "link": "h􀆩ps://www.linkedin.com/posts/bruno-costa-figueiredo-b9b3141a2_nodejsjavascript-webdevelopment-ac􀆟vity-6801307042813358080-KMMp",
            "icone": "fas fa-video",
            "stack": "HTML, CSS, JS, Node, Express, MySQL com Sequelize e EJS"
        },
        {
            "name": "To Do List",
            "description": "App construido com HTML, CSS e JavaScript para gerenciamento de notas com opções de marcar como concluído e deletar, além de ter a opção de colocar data e horário. Os dados são armazenados diretamente no localStorage o que garante segurança dos dados caso o navegador seja recarregado.",
            "link": "https://www.linkedin.com/posts/bruno-costa-figueiredo-b9b3141a2_javascript-programming-webdevelopment-activity-6808918033898205184-YYws",
            "icone": "fas fa-video",
            "stack": "HTML, CSS, e JS"
        },
        {
            "name": "Painel administrativo",
            "description": "O projeto consiste em uma aplicação criada em React.JS e Styled Components e com integração com API de usuários feita em Node.Js com JWT e banco de dados MySQL. Projeto consiste em uma interface para manipulação de cadastros de usuários.",
            "link": "https://www.linkedin.com/posts/bruno-costa-figueiredo-b9b3141a2_webdeveloper-javascript-nodejs-activity-6811396668827672576-Mfpi",
            "icone": "fas fa-video",
            "stack": "ReactJS, Styled Components, NodeJS, MySQL e JWT"
        },
        {
            "name": "Sistema financeiro",
            "description": "O projeto consiste em uma aplicação criada em React.JS e Styled Components e com integração com API de usuários feita em Node.Js e banco de dados PostgreSQL. Projeto consiste em uma interface para manipulação de dados financeiros que permite organizar os pagamentos e recebimentos por data, gerando saldos e débitos conforme a tabela é alimentada.",
            "link": "https://www.linkedin.com/posts/bruno-costa-figueiredo-b9b3141a2_reactjs-nodejs-developer-activity-6821819754978803712-JFM1",
            "icone": "fas fa-video",
            "stack": "ReactJS, Styled Components, NodeJS e PostgresSQL"
        },
        {
            "name": "Sistema de Extrato<br/>bancário",
            "description": "O projeto é uma aplicação criada em React.JS e Styled Components que consiste em um painel de extrato bancário. O projeto conta com aplicação de mudança para tema escuro.",
            "link": "https://www.linkedin.com/posts/bruno-costa-figueiredo-b9b3141a2_react-design-webdesigner-activity-6828792606906978304-xkxI",
            "icone": "fas fa-video",
            "stack": "ReactJS e Styled Components"
        }
    ]


const api = projects

console.log(typeof (api))

// vamos criar os projetos

const lista = document.getElementById('list')

const card = document.createElement('div')


const cardHeader = document.createElement('div')
cardHeader.classList.add('card-header')

const cardBody = document.createElement('div')
cardBody.classList.add('card-body')

let titulo = document.createElement('p')
titulo.classList.add('title-project')


api.forEach(project => {
    const template = document.createElement('div')
    template.classList.add('project-item')
    template.innerHTML = `
        <p class="title-project">${project.name}</p>
        <p class="description-project">${project.description}</p>
        <div class="share-project">
            <a class="link-project" href="${project.link}" title="link do projeto"><i class="${project.icone}"></i></a>
            <p class="stack-project">${project.stack}</p>
        </div>
    `
    
    //titulo.innerHTML = `<p class="title-project>${api[0].name}</p>`
    cardHeader.appendChild(template)
    console.log('ta dando certo')
    
})

card.appendChild(cardHeader)
lista.appendChild(card)
