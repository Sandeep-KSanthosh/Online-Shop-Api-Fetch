// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from your API
    fetch('https://api.example.com/cart')
        .then(response => response.json())
        .then(data => {
            // Handle the fetched data
            displayCartItems(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayCartItems(cartData) {
    // Assuming cartData is an array of items

    // Get the container where you want to display cart items
    const cartContainer = document.getElementById('cart-container');

    // Loop through the cartData and create HTML elements for each item
    cartData.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'card';

        // Customize this based on your API response structure
        itemCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">Price: $${item.price}</p>
            </div>
        `;

        // Append the item card to the cart container
        cartContainer.appendChild(itemCard);
    });
}
