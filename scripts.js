// Fetch card data from JSON file
fetch('cards.json')
  .then(response => response.json())
  .then(cards => {
    const cardContainer = document.querySelector('.card-container');

    // Generate card elements
    cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <h2>${card.title}</h2>
        <p>${card.description}</p>
      `;
      cardContainer.appendChild(cardElement);
    });
  });
