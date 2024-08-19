const miscompra = async ()=>{
    let request = await fetch('php/miscompras.php', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("usuariosesion"),
      },
      method: "POST",
      body: JSON.stringify({}),
      credentials: 'include'  
    });
    var info = await request.json();
    if(request.status != 200){
        console.log("Hubo un error");
        return
    }
    let comprahtml = "";
    info.forEach(dato => {
        comprahtml += `
        <div class="form-container">
                <label for="product-names">
                Numero de compra: ${dato.pkcompra} <br>
                <b>Estado: ${dato.estado}</b></label>
                <label for="total-price">Precio Total de la Compra:</label>
                <p class="p_pagar total-price">$${dato.total}</p>
                <label for="ubicacion">Ubicación:</label>
                <p class="p_pagar location">
                Calle:${dato.calle} <br>
                Piso:${dato.piso} <br>
                Localidad:${dato.localidad} <br>  
                Codigo Postal:${dato.codigop}
                </p>
                <div class="button-container">
                    <button class="botonpagar botonproductos" data-id="${dato.pkcompra}" type="submit" id="submit-button">Ver productos</button>
                    <button class="botonpagar" type="submit" id="submit-button">Cancelar Compra</button>
                </div>
           
        </div>
        
        `
    });
    document.querySelector(".cosas").innerHTML = comprahtml;
    document.querySelectorAll('.botonproductos').forEach(btn=>{btn.addEventListener('click', function() {
      let id = this.getAttribute("data-id")
    })
    });
}
miscompra();
  