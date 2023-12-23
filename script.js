var header = document.querySelector("header");
var section = document.querySelector("section");
//Como solicitar um JSON por URL pelo navegador
var request = new XMLHttpRequest();
var jsonURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
request.open("GET", jsonURL)
request.responseType = "json"; //para que o retorno seja em formato de objeto JavaScript
request.send()
request.onload = function () {
    var superHeroes = request.response
    preencherHeader(superHeroes)
    preencherSection(superHeroes)
}

function preencherHeader(infos) {
    let tittle = document.createElement('h1')
    tittle.innerHTML = infos["squadName"]
    header.appendChild(tittle)

    let subTittle = document.createElement('p')
    subTittle.innerHTML = `Hometown: ${infos.homeTown} // Formed: ${infos.formed}`
    header.appendChild(subTittle)
}

function preencherSection(infos) {
    for (let hero of infos.members) {
        let article = document.createElement('article'),
            h2 = document.createElement('h2'),
            para1 = document.createElement('p'),
            para2 = document.createElement('p'),
            para3 = document.createElement('p'),
            list = document.createElement('ul')

        h2.textContent = hero["name"]
        para1.textContent = `Secret identity: ${hero["secretIdentity"]}`
        para2.textContent = `Age: ${hero["age"]}`
        para3.textContent = `Superpowers`

        let superPowers = hero.powers

        for (let power of superPowers) {
            let listItem = document.createElement('li')
            listItem.textContent = power
            list.appendChild(listItem)
        }
        article.appendChild(h2)
        article.appendChild(para1)
        article.appendChild(para2)
        article.appendChild(para3)
        article.appendChild(list)

        section.append(article)
    }
}