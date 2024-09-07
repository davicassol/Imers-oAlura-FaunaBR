function pesquisar() {
  //  Obter a seção de resultados
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML =
      '<p style="color: #fff;">Digite o nome de um animal, habitat ou região</p>';
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  //  Inicializar a string de resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  //  Iterar sobre os dados e construir o HTML
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.join(", ").toLowerCase();
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          ${dado.titulo}
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = '<p style="color: #fff;">Nada foi encontrado</p>';
  }

  //  Atualizar a seção com os resultados
  section.innerHTML = resultados;
}
