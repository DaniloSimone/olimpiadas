let form = document.querySelector('.register');
let forml = document.querySelector('.login');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let nombre = document.querySelector('.registernombre').value;
      let mail = document.querySelector('.registermail').value;
      let contrasena = document.querySelector('.registercontrasena').value;
      const register = async ()=>{
        let request = await fetch(`php/register.php`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: "POST",
          body: JSON.stringify({
            nombre, mail, contrasena
          }),
          credentials: 'include'  
        });
        let response = await request.json();
        if(request.status != 200){
            if(request.status = 409){
                console.log("nombre o mail ya utilizado")
                return
            }
        }
        localStorage.setItem("usuariosesion", response);
        debugger;
        console.log(localStorage.getItem("usuariosesion"));
        document.location.href = "./index.html"
      }
      register();
})
    forml.addEventListener('submit', (e) => {
        e.preventDefault();
      let nombre = document.querySelector('.loginnombre').value;
      let contrasena = document.querySelector('.logincontrasena').value; 
      const login = async ()=>{
        let request = await fetch(`php/register.php`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: "POST",
          body: JSON.stringify({
            nombre, mail, contrasena
          }),
          credentials: 'include'  
        });
        let response = await request.json();
        if(request.status != 200){
            if(request.status = 409){
                console.log("nombre o mail ya utilizado")
                return
            }
        }
        localStorage.setItem("usuariosesion", response);
        console.log(localStorage.getItem("usuariosesion"));
        document.location.href = "./index.html"
        
    }
    login()
})