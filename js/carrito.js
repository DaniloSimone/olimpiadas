document.addEventListener('DOMContentLoaded', () => {
    const nombre = async ()=>{
        let request = await fetch('php/mostrarcarrito.php', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("usuariosesion"),
          },
          method: "POST",
          body: JSON.stringify({}),
          credentials: 'include'  
        });
        var info = await request.json();
        
        info.forEach(dato =>{
            console.log("hola")
        })
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
}
nombre();
});