document.addEventListener('DOMContentLoaded', () => {
function modificarcarrito(pkcarrito, cantidad){
    const numerocarrito = async ()=>{
        let request = await fetch('php/cantidadcarrito.php', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("usuariosesion"),
          },
          method: "POST",
          body: JSON.stringify({
            pkcarrito, cantidad
            }),
          credentials: 'include'  
        });
        var info = await request.json();
        if(request.status == 200){
            console.log("Se modifico el carrito correctamente");
        }
        
      }
      numerocarrito();
}
    
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
        let cosashtml = "";
        info.forEach(dato =>{
            cosashtml += `
            <div class="cart-items">
            <div class="cart-item" data-price="${dato.precio}">
                <img src="images/pol.jpg" alt="Producto 1">
                <div class="item-details">
                    <h2>${dato.nombre}</h2>
                    <p class="price">$${dato.precio}</p>
                    <div class="quantity-control">
                    <button class="decrement-btn" dato-id=${dato.pkproducto}>-</button>
                    <input type="number" dato-id=${dato.pkproducto} id=${dato.pkproducto} value="1" min="1" max="${dato.stock}">
                    <button class="increment-btn"  dato-id=${dato.pkproducto} max='${dato.stock}'>+</button>
                    </div>
                </div>
                <button class="remove-item" dato-id=${dato.pkproducto}>Eliminar</button>
            </div>
        </div>
            `;
        })
    document.querySelector('.cartas').innerHTML = cosashtml;
    const removeButtons = document.querySelectorAll('.remove-item');
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    const checkoutButton = document.querySelector('.checkout-btn');
    const continueShoppingButton = document.querySelector('.continue-shopping-btn');
    const incrementButtons = document.querySelectorAll('.increment-btn');
    const decrementButtons = document.querySelectorAll('.decrement-btn');
    const form = document.querySelector(".formulario_modal")

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            let id = button.getAttribute('dato-id');
            const borrarcarrito = async ()=>{
                let request = await fetch('php/borrarcarrito.php', {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + localStorage.getItem("usuariosesion"),
                  },
                  method: "POST",
                  body: JSON.stringify({
                    id
                    }),
                  credentials: 'include'  
                });
                var info = await request.json();
                if(request.status == 200){
                    console.log("Se modifico el carrito correctamente");
                }
                
              }
            borrarcarrito();
            button.parentElement.remove();
            updateTotal();

        });
    });

    quantityInputs.forEach(input => {
        input.addEventListener('change', updateTotal);
        input.addEventListener("change", (e) => {
            if (parseInt(e.target.value) > parseInt(e.target.getAttribute('max'))) {
                e.target.value = e.target.getAttribute('max');
            }
            if (parseInt(e.target.value) < parseInt(e.target.getAttribute('min'))) {
                e.target.value = e.target.getAttribute('min');
            }
            modificarcarrito(e.target.getAttribute('dato-id'), e.target.value);
            console.log(e.target.getAttribute('dato-id'));

        });
    });

    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            if(parseInt(button.previousElementSibling.value) < parseInt(button.getAttribute('max'))){
                const input = button.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateTotal();
            modificarcarrito(button.getAttribute('dato-id'), document.getElementById(button.getAttribute('dato-id')).value);
            }
            
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.nextElementSibling;
            if (input.value > 1) {
                input.value = parseInt(input.value) - 1;
                updateTotal();
                modificarcarrito(button.getAttribute('dato-id'), document.getElementById(button.getAttribute('dato-id')).value);
                console.log(button.getAttribute('dato-id'));
                console.log();
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

    checkoutButton.addEventListener('click',(e) =>{
        console.log("hola")
        const veriubi = async ()=>{
            let request = await fetch('php/coseguirubi.php', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("usuariosesion"),
              },
              method: "POST",
              body: JSON.stringify({
                }),
              credentials: 'include'  
            });
            let info = await request.json();
            if(request.status == 200){
                document.location.href = "./confirm-compra.html";
                return
            }
            dialog.showModal() 
        }
          veriubi();
        
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let calle = document.querySelector('.calle').value;
        let piso = document.querySelector('.piso').value;
        let localidad = document.querySelector('.localidad').value;
        let codigo = document.querySelector('.codigo').value;
        const agregarubi = async ()=>{
            let request = await fetch('php/ubicacion.php', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("usuariosesion"),
              },
              method: "POST",
              body: JSON.stringify({
                calle, piso, localidad, codigo
                }),
              credentials: 'include'  
            });
            var info = await request.json();
            if(request.status != 200){
                console.log("Hubo un error");
                return
            }
            console.log("Ubicacion guardada correctamente")
            document.location.href = "./confirm-compra.html";c
          }
          agregarubi();

    })
}
nombre();
});