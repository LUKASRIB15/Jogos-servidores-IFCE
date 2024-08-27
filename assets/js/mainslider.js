document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-neo");
  const items = Array.from(document.querySelectorAll(".item"));
  let currentIndex = 1; // Começa com o item 2 em destaque (índice 1)

  function updateHighlight() {
    // Remove a classe 'highlighted' de todos os itens
    items.forEach((item) => {
      item.classList.remove("highlighted");
    });

    // Adiciona a classe 'highlighted' ao item em destaque
    items[currentIndex].classList.add("highlighted");

    // Verifica se a classe está sendo aplicada corretamente
    console.log(
      "Classe 'highlighted' aplicada ao item em destaque:",
      items[currentIndex]
    );
    console.log(
      "URL da imagem de fundo do item em destaque:",
      items[currentIndex].style.backgroundImage
    );
  }

  function slideNext() {
    // Move o primeiro item para o final e atualiza a lista de itens
    const firstItem = items.shift(); // Remove o primeiro item
    slider.append(firstItem); // Adiciona ao final do slider
    items.push(firstItem); // Atualiza a lista de itens

    // Atualiza o destaque após mover
    updateHighlight();
  }

  function initializeSlider() {
    // Inicializa o destaque

    // Configura o intervalo para mudar as imagens a cada 6 segundos
    setInterval(slideNext, 6000);
  }

  // Ajusta o destaque inicial e configura o slider
  updateHighlight();

  initializeSlider();
});
