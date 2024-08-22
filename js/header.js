let cabecera = `
 <div class="buscador_sesion_carrito">
            <div class="buscador">
                <a href="index.html"><img src="log.png" alt="" class="logo"></a>
                <form action="producto.html" method="get" class="form_buscador">
                <input type="text" name="nombre" placeholder="Buscar..." class="input_buscador">
                <button type="submit" class="boton_buscador"><i class="fas fa-search"></i></button>
                </form>
            </div>
            <div class="sesion_carrito">
                <div class="sesion">
                    <a href="iniciarsesion.html" class="isesion">Iniciar Sesión</a>
                </div>
                <div class="carrito">
                <a href="carrito.html" class="a_carrito"><i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div class="div_botones">
            <a href="producto.html?nombre="><button class="header_botones">Novedades</button></a>
            <a href="mis-compras.html"><button class="header_botones">Mis compras</button></a>
        </div>
`


if (document.readyState == 'loading') {
  // cargando todavía, esperar el evento
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('header').innerHTML = cabecera;
  });
} else {
  // DOM está listo!
}


function cerrarsesion() {
  localStorage.removeItem("usuariosesion");
  document.location.href = "./index.html";
}

if(localStorage.getItem("usuariosesion")){
  const nombre = async ()=>{
    let request = await fetch('php/nombre.php', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("usuariosesion"),
      },
      method: "POST",
      body: JSON.stringify({}),
      credentials: 'include'  
    });
    var info = await request.json();
    console.log(info);
    document.querySelector(".sesion").innerHTML = `<p onclick="cerrarsesion()" class="cerrar_sesion">${info} <br> <b>Cerrar Sesion</b></p>`;
  }
  nombre();
  

}else{
}

