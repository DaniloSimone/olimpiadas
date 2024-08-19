if(!localStorage.getItem("usuariosesion")){
    document.location.href = "./iniciarsesion.html"
}
const carrito = async ()=>{
    let request = await fetch('php/mostrarcarrito.php', {
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
    if(request.status != 200){
        console.log("hubo un error")
        document.location.href = "./index.html";
        return
    }
    let carritohtml = '';
    let totaltotal = 0
    info.forEach(dato => {
        let total = dato.cantidad * dato.precio
        totaltotal = totaltotal + dato.cantidad * dato.precio
        carritohtml += `
        <li>${dato.nombre} cantidad: x${dato.cantidad} precio u: ${dato.precio} TOTAL:$${total}</li>
        `
    });
    document.querySelector(".product-list").innerHTML = carritohtml;
    document.querySelector(".total-price").innerHTML = `$${totaltotal}`;
}
carrito();

const ubicacion = async ()=>{
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
    if(request.status != 200){
        console.log("hubo un error")
        return
    }
    let ubihtlm = '';
    info.forEach(dato => {
        ubihtlm += `
        Calle:${dato.calle} <br>
        Piso:${dato.piso} <br>
        Localidad:${dato.localidad} <br>  
        Codigo Postal:${dato.codigop}
        `
    });
    document.querySelector(".location").innerHTML = ubihtlm;
}

document.querySelector(".botonpagar").addEventListener("click", (e)=>{
  const crearcompra = async ()=>{
    let request = await fetch('php/crearcompra.php', {
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
    console.log("Compra realizada correctamente")
    dialog.showModal()
  }
  crearcompra();
});
ubicacion();

document.querySelector("#close-button").addEventListener("click", (e)=>{
  document.location.href = "./index.html";
})