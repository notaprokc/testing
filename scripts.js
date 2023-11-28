// Fetch card data from JSON file
fetch('cards.json')
  .then(response => response.json())
  .then(cards => {
    const cardContainer = document.querySelector('.card-container');

    // Generate card elements
    cards.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <h2>${card.title}</h2>
        <p>${card.description}</p>
      `;
      cardContainer.appendChild(cardElement);

      // Set the first card as active
      if (index === 0) {
        cardElement.classList.add('active');
      }
    });
  });
