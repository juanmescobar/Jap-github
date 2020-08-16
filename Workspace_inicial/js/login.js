//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
});

//función para redireccionar
function redirect(){
    location.href="https://juanmescobar.github.io/Jap-github/Workspace_inicial/main/"
}
const loginForm = document.getElementById("login-form");

// verificación del form antes de redireccionar
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username.includes(@)  && 8<(length(password))<16 {
        redirect();
    }
})

