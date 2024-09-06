function Search() {
    let section = document.getElementById("resultados-pesquisa");
    let searchField = document.getElementById("campo-pesquisa").value;
    searchField = searchField.toLowerCase();

    let results = "";
    let name = "";
    let description = "";
    let tags = "";

    if (!searchField) {
        section.innerHTML = `
            <p>Lamentamos, não há nenhum resultado disponível.<p>
        `
        return;
    }

    for (let data of datas) {
        name = data.name.toLowerCase();
        description = data.description.toLowerCase();
        tags = data.tags.toLowerCase();

        if (name.includes(searchField) || description.includes(searchField) || tags.includes(searchField)) {
            results += `
            <div class="item-resultado">
                <h2>${data.name}</h2>
                <p class="descricao-meta">
                    ${data.description}
                </p>
                <a href="${data.gameOnSteam}" target="_blank">Jogo na Steam</a>
            </div>
        `;
        } 
        
        if (!results) {
            results = `
                <p>Lamentamos, não há nenhum resultado disponível.<p>
            `
        }
    }

    section.innerHTML = results;
}