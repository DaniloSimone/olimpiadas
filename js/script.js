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

