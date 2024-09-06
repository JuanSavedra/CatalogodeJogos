function Search() {
    let section = document.getElementById("resultados-pesquisa");
    let results = "";

    for (let data of datas) {
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

    section.innerHTML = results;
}