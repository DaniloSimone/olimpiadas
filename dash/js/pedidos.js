const pedidos = async ()=>{
    let request = await fetch('php/todas.php', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({
        }),
      credentials: 'include'  
    });
    var info = await request.json();
    if(request.status != 200){
        console.log("Hubo un error");
    }
    let productoshtml = "";
    info.forEach(dato => {
        productoshtml += `
        <div class="tabla_campo">
                <div class="campo campo_nombre">
                Localidad: ${dato.localidad} <br>
                Codigo Postal: ${dato.codigop} <br>
                Calle: ${dato.calle} <br>
                Piso: ${dato.piso} <br>
                Fecha de compra: ${dato.fecha}
                </div>
                <div class="campo campo_precio">${dato.total}</div>
                <div class="campo campo_descuento">${dato.estado}</div>
                <div class="campo campo_boton">
        `;
        
        if(dato.estado == "Pendiente"){
        productoshtml +=` <button class="modificar cancelar" data-id="${dato.pkcompra}">Cancelar</button>
                 <button class="modificar entregar" data-id="${dato.pkcompra}">Entregar</button>`;
        }else{
            
        }
        productoshtml +=`</div>
            </div>
        `;
    });
    document.querySelector('.cosas_tabla').innerHTML = productoshtml;
    document.querySelectorAll(".cancelar").forEach(btn=>{btn.addEventListener('click', function(){
    let id = this.getAttribute("data-id");
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
  })})
  document.querySelectorAll(".entregar").forEach(btn=>{btn.addEventListener('click', function(){
    let id = this.getAttribute("data-id");
    const entregar = async ()=>{
        let request = await fetch('php/entregar.php', {
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
      entregar()
  })})
  }
  pedidos();