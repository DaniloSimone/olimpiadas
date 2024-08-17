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
    document.querySelector(".top3right").innerHTML = `<p>Bienvenido</p> <p><b>${info}</p>`;
    document.querySelector(".contenido-desplegable").innerHTML += `<a onclick="cerrarsesion()">Cerrar Sesion</a>`;
  }
  nombre();

}else{
}

