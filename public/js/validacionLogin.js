window.addEventListener("load", function() {

    console.log("Estoy conectado")

    let correo = document.querySelector(".correo");
    let contra = document.querySelector(".contrasena");
    let form = document.querySelector(".form_login");

    correo.addEventListener("focus", function(e){
        correo.addEventListener("keypress", function(e){
            if(!this.value.includes("@")){
                this.classList.add("invalid");
                this.classList.remove("valid");
            }else{
                this.classList.add("valid");
                this.classList.remove("invalid");
            }
        })
    })

    contra.addEventListener("focus", function(e){
        contra.addEventListener("keypress", function(e){
            if(this.value.length < 8){
                this.classList.add("invalid");
                this.classList.remove("valid");
            }else{
                this.classList.add("valid");
                this.classList.remove("invalid");
            }
        })
    })

    form.addEventListener("submit", function(e) {

        let errores = []

        if(correo.value == ""){
            errores.push("El correo debe estar lleno");
        } else if(!correo.value.includes("@")) {
            errores.push("El correo debe ser válido");
        }

        if(contra.value == ""){
            errores.push("La contraseña debe estar llena");
        }

        if(errores.length > 0){

            e.preventDefault();

            console.log(errores);

            let ulErrores = document.querySelector("div.errores ul");

            ulErrores.innerHTML = ""
            
            for(let i=0; i<errores.length; i++){
                ulErrores.innerHTML += "<li>"+errores[i]+"</li>"
            }

        }

    })

})