const projects =
    [
        {
            "name": "project one",
            "description": "aqui vai a descrição do projeto",
            "link": "link",
            "stack": "JS e Node"
        },
        {
            "name": "project two",
            "description": "aqui vai a descrição do projeto",
            "link": "link",
            "stack": "JS e Node"
        }
    ]


const api = projects

console.log(typeof (api))

// vamos criar os projetos

const lista = document.getElementById('list')

const card = document.createElement('div')
card.classList.add('project-item')

const cardHeader = document.createElement('div')
cardHeader.classList.add('card-header')

const cardBody = document.createElement('div')
cardBody.classList.add('card-body')

let titulo = document.createElement('p')
titulo.classList.add('title-project')

const button = document.createElement('button')
button
api.forEach(project => {
    titulo.innerText = `${project.name}`
    
    //titulo.innerHTML = `<p class="title-project>${api[0].name}</p>`
    cardHeader.appendChild(titulo)
    card.appendChild(cardHeader)
    lista.appendChild(card)
    console.log('ta dando certo')

})

