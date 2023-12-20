// OBJETIVO - quando clicar no botão do personagem na lsta, marcar o botão como selecionado
//objt 01 - passo 1  - pegar os botões no JS poder verificar quando o usuário clicar em cima de um deles.
const botoes = document.querySelectorAll(".botao");

// OBJETIVO 2- quando clicar  no botão do personogem mostrar as informações do personagem
// objt 02-  Passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // objt 01 - Passo 3 - verificar se já existe um botão selecionado, se sim devemos remover a seleção dele
    desselecionarBotao();
    //objt2 - passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
    desselecionarPersonagem();

    //objt01 - Passo2  - adicionar a classe "selecionado" no botão que o usuário clicou
    botao.classList.add("selecionado");

    //bjt2 - Passo 2 - adicinar a classe "selecionado" no personagem que o usuário selecionou
    personagens[indice].classList.add("selecionado");
  });
});

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
