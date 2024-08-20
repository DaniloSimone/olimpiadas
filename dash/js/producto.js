const producto = async ()=>{
    let request = await fetch('php/productos.php', {
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
                <div class="campo campo_nombre">${dato.nombre}</div>
                <div class="campo campo_precio">${dato.precio}</div>
                <div class="campo campo_descuento">${dato.stock}</div>
                <div class="campo campo_boton"> <button class="modificar" data-id="${dato.pkproducto}">Editar</button></div>
            </div>
        `;
    });
   document.querySelector('.cosas_tabla').innerHTML = productoshtml;
  }
  producto();

  document.querySelector('.nueva').addEventListener('click', ()=>{
    modalnueva.showModal();
  });

  document.querySelector('.cerrar_boton').addEventListener('click', ()=>{
    modalnueva.close();
  });

  document.querySelector("#agregarboton").addEventListener('click',function(){
    let nombre = document.querySelector("#nombre_modificar").value;
    let precio = document.querySelector("#precio_modificar").value;
    let stock = document.querySelector("#descuento_modificar").value;
    let descripcion = document.querySelector("#descripcion_modificar").value;
    const agregarp = async ()=>{
        let request = await fetch('php/agregap.php', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("usuariosesion"),
          },
          method: "POST",
          body: JSON.stringify({
            nombre, precio, stock, descripcion
            }),
          credentials: 'include'  
        });
        var info = await request.json();
        if(request.status != 200){
            console.log("Hubo un error");
        }
      }
      agregarp()
    
    }
    ) 
    