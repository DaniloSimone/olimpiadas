if(!localStorage.getItem("usuariosesion")){
  document.location.href = "./iniciarsesion.html"
}
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
        
        `
        if(dato.estado == "Pendiente"){
          comprahtml +=` 
          <button class="botonpagar botoncancelar" data-id="${dato.pkcompra}" type="submit" id="submit-button">Cancelar Compra</button>
          </div>
        </div>
          `
        }else{
          comprahtml += `
          
            </div>
        </div>
          `
        }
    });
    document.querySelector(".cosas").innerHTML = comprahtml;
    document.querySelectorAll(".botoncancelar").forEach(btn=>{btn.addEventListener('click', function(){
      let id = this.getAttribute("data-id");
      document.querySelector(".cancelardef").setAttribute("data-id", id);
      modalc.showModal();
    })})
    document.querySelectorAll('.botonproductos').forEach(btn=>{btn.addEventListener('click', function() {
      let id = this.getAttribute("data-id")
      const misproductos = async ()=>{
        let request = await fetch('php/misproductos.php', {
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
        if(request.status != 200){
            console.log("Hubo un error");
        }
        let productomodal = "";
        info.forEach(dato => {
          let total = dato.cantidad*dato.precio;
          productomodal += `
          <li>${dato.nombre} cantidad: x${dato.cantidad} precio u: ${dato.precio} TOTAL:$${total}</li>
          `
        });
        document.querySelector(".lista_modal").innerHTML = productomodal;
        console.log("hola")
      }
      misproductos();
      modalp.showModal();
    })
    });
}

miscompra();
document.querySelector(".cerrarmodal").addEventListener('click',(e)=>{
modalp.close();
}) 
document.querySelector(".cerrarmodaldos").addEventListener('click',(e)=>{
  modalc.close();
}) 
document.querySelector(".cancelardef").addEventListener('click',(e)=>{
let id = document.querySelector(".cancelardef").getAttribute("data-id");
console.log(id);

  const cancelar = async ()=>{
      let request = await fetch('php/cancelar.php', {
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
      if(request.status != 200){
          console.log("Hubo un error");
      }
      location.reload()
    }
    cancelar()

}
) 
