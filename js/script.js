document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownContent.style.display = 'none';

    dropdown.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'flex';
    });

    dropdown.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-item');
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    const checkoutButton = document.querySelector('.checkout-btn');
    const continueShoppingButton = document.querySelector('.continue-shopping-btn');
    const incrementButtons = document.querySelectorAll('.increment-btn');
    const decrementButtons = document.querySelectorAll('.decrement-btn');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
            updateTotal();
        });
    });

    quantityInputs.forEach(input => {
        input.addEventListener('change', updateTotal);
    });

    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateTotal();
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.nextElementSibling;
            if (input.value > 1) {
                input.value = parseInt(input.value) - 1;
                updateTotal();
            }
        });
    });

    continueShoppingButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    function updateTotal() {
        let total = 0;
        const items = document.querySelectorAll('.cart-item');
        items.forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = item.querySelector('input[type="number"]').value;
            total += price * quantity;
        });
        document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
        checkoutButton.disabled = total === 0;
    }
    updateTotal();
});

const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions');
const searchButton = document.getElementById('search-button');

const suggestions = [
    'Manzana',
    'Banana',
    'Cereza',
    'Anana',
    'Kiwi',
    'Durazno',
    'Uva',
    'Mandarina'
];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionsContainer.innerHTML = '';
    if (query) {
        suggestionsContainer.style.display = 'block';
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));
        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(item => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = item;
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = item;
                    suggestionsContainer.innerHTML = '';
                    suggestionsContainer.style.display = 'none';
                });
                suggestionsContainer.appendChild(suggestionItem);
            });
        } else {
            const noResultItem = document.createElement('div');
            noResultItem.classList.add('suggestion-item');
            noResultItem.textContent = 'No se encontró nada igual o similar a lo que se busca';
            suggestionsContainer.appendChild(noResultItem);
        }
    } else {
        suggestionsContainer.style.display = 'none';
    }
});

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    performSearch(query);
});

function performSearch(query) {
    console.log('Buscando:', query);

}

document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
        suggestionsContainer.style.display = 'none';
    }
});