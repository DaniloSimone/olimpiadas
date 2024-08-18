let get = new URLSearchParams(location.search);
let nombre = get.get('nombre');
console.log(nombre)
const bproducto = async ()=>{
    let request = await fetch(`php/mostrarproductos.php?nombre=${nombre}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "GET", 
      credentials: 'include'  
    });
    let response = await request.json();
    if(request.status != 200){
        if(request.status = 409){
            console.log("No se encontro nada")
            return
        }
    }
    let producto= ''
    response.forEach(dato => {
       console.log(dato.stock)
       producto += `
       <div class="product-container">
    <div class="product-details">
        <div class="product-name">${dato.nombre}</div>
        <div class="product-description-container">
            <div class="product-description">${dato.descripcion}</div>
        </div>
    </div>
     `   
    if (dato.stock == 0) {
        
    
    producto +=`
    <div class="product-info">
        <div class="product-price">$${dato.precio}</div>
        <div class="additional-info">Llega gratis mañana</div>
        <div class="additional-info">Devolución en los próximos 30 días</div>
        <div class="buttons-container">
            <button  disabled class="buy-button">SIN STOCK</button>
            <div class="stock-counter" id="stock-counter">Stock: <span id="stock-quantity">0</span>
        </div>
    </div>
    </div>
    </div>
    `
    }else{
      producto += `
    <div class="product-info">
        <div class="product-price">$${dato.precio}</div>
        <div class="additional-info">Llega gratis mañana</div>
        <div class="additional-info">Devolución en los próximos 30 días</div>
        <div class="buttons-container">
            <button class="buy-button carrito">Añadir al carrito</button>
            <div class="stock-counter" id="stock-counter">Stock: <span id="stock-quantity">${dato.stock}</span>
        </div>
    </div>
    </div>
    </div>
    `  
    }       

       
    });
    document.querySelector(".producto").innerHTML = producto
}
bproducto()
