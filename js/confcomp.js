let supertotal = 0

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
    supertotal = parseInt(totaltotal);
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
    const mp = new MercadoPago('TEST-85c202b1-4d08-4136-900e-eb64324a8ff1', {
      locale: 'es-AR'
    });
    const bricksBuilder = mp.bricks();
    const renderCardPaymentBrick = async (bricksBuilder) => {
      const settings = {
        initialization: {
          amount: supertotal   , // monto a ser pago
          payer: {
            email: "",
          },
        },
        customization: {
          visual: {
            style: {
              customVariables: {
                theme: 'default', // | 'dark' | 'bootstrap' | 'flat'
              }
            }
          },
            paymentMethods: {
              maxInstallments: 1,
            }
        },
        callbacks: {
          onReady: () => {
            // callback llamado cuando Brick esté listo
          },
          onSubmit: (cardFormData) => {
            //  callback llamado cuando el usuario haga clic en el botón enviar los datos
            //  ejemplo de envío de los datos recolectados por el Brick a su servidor
            return new Promise((resolve, reject) => {
              fetch("php/mercadopago.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData)
              })
                .then((response) => {
                  crearcompra();  
                  resolve();
                })
                .catch((error) => {
                  // tratar respuesta de error al intentar crear el pago
                  console.log("chau")
                  reject();
                })
            });
          },
          onError: (error) => {
            // callback llamado para todos los casos de error de Brick
           error
          },
        },
      };
      window.cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
    };
    renderCardPaymentBrick(bricksBuilder);
    
    
    
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


ubicacion();


document.querySelector("#close-button").addEventListener("click", (e)=>{
  document.location.href = "./index.html";
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
})




