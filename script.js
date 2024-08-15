document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownContent.style.display = 'none'; // Asegurarse de que el menú esté oculto al cargar la página

    dropdown.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'flex';
    });

    dropdown.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });
});