if(localStorage.getItem("usuariosesion")){
  const nombre = async ()=>{
    let request = await fetch('php/validar.php', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("usuariosesion")
      },
      method: "POST",
      body: JSON.stringify({}),
      credentials: 'include'  
    });
    var info = await request.json();
    console.log(info);
    
  }
  nombre();

}else{
    const nombre = async ()=>{
        let request = await fetch(`php/validar.php`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("usuariosesion")
          },
          method: "POST",
          body: JSON.stringify({}),
          credentials: 'include'  
        });
        var info = await request.json();
        setInf(info);
        
      }
      nombre();
}

