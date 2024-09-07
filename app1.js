function pesquisar() {
    // Obtém o termo de pesquisa digitado pelo usuário
    const termoPesquisa = document.getElementById("resultados-pesquisa").value;

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Filtra os dados para encontrar os resultados que correspondem ao termo de pesquisa
    const resultadosFiltrados = dados.filter(dado => {
        // Aqui você pode implementar a lógica de filtragem, por exemplo:
        // - Comparar o termo de pesquisa com o título ou descrição usando includes() ou outras funções de string
        // - Fazer uma pesquisa mais complexa usando expressões regulares
        return dado.titulo.toLowerCase().includes(termoPesquisa.toLowerCase());
    });

    // Constrói o HTML para cada resultado filtrado
    resultadosFiltrados.forEach(dado => {
        resultados += `
            <div class="item-resultado">
                </div>
        `;
    });

    // Exibe os resultados filtrados
    section.innerHTML = resultados;
}
