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
            "name": "Painel administrativo",
            "description": "O projeto consiste em uma aplicação criada em React.JS e Styled Components e com integração com API de usuários feita em Node.Js com JWT e banco de dados MySQL. Projeto consiste em uma interface para manipulação de cadastros de usuários.",
            "link": "h􀆩ps://www.linkedin.com/feed/update/urn:li:ac􀆟vity:6811396668827672576/",
            "icone": "fas fa-video",
            "stack": "React, Styled Components, Node, MySQL e JWT"
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
