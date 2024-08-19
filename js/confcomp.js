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
    if(request.status =! 200){
        console.log("hubo un error")
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