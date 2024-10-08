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
            if(request.status == 409){
                console.log("nombre o mail ya utilizado")
                document.querySelector('.error').innerHTML = "<p>Nombre o mail ya utilizado</p>";
                return
                
            }
            return
        }
      localStorage.setItem("usuariosesion", response);
        console.log(localStorage.getItem("usuariosesion"));
        history.back();
      }
      register();
})
    forml.addEventListener('submit', (e) => {
        e.preventDefault();
      let mail = document.querySelector('.loginmail').value;
      let contrasena = document.querySelector('.logincontrasena').value; 
      const login = async ()=>{
        let request = await fetch(`php/login.php`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: "POST",
          body: JSON.stringify({
            mail, contrasena
          }),
          credentials: 'include'  
        });
        let response = await request.json();
        if(request.status != 200){
          document.querySelector('.errorl').innerHTML = "<p>Mail o contraseña incorrecta</p>";
          return
        }
        localStorage.setItem("usuariosesion", response);
        console.log(localStorage.getItem("usuariosesion"));
        history.back();
    }
    login()
})