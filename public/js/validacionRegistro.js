window.addEventListener("load", function() {

    console.log("Estoy conectado")

    let nombre = document.querySelector(".nombre");
    let apellido = document.querySelector(".apellido");
    let correo = document.querySelector(".correo");
    let contra = document.querySelector(".contra");
    let imagen = document.querySelector(".imagen");
    let form = document.querySelector(".form_register");

    nombre.addEventListener("focus", function(e){
        nombre.addEventListener("keypress", function(e){
            if(this.value.length < 2){
                this.classList.add("invalid");
                this.classList.remove("valid");
            }else{
                this.classList.add("valid");
                this.classList.remove("invalid");
            }
        })
    })

    apellido.addEventListener("focus", function(e){
        apellido.addEventListener("keypress", function(e){
            if(this.value.length < 2){
                this.classList.add("invalid");
                this.classList.remove("valid");
            }else{
                this.classList.add("valid");
                this.classList.remove("invalid");
            }
        })
    })

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

        if(nombre.value == ""){
            errores.push("El nombre debe estar lleno");
        } else if(nombre.value.length < 2) {
            errores.push("El nombre debe tener al menos 2 carácteres");
        }

        if(apellido.value == ""){
            errores.push("El apellido debe estar lleno");
        } else if(apellido.value.length < 2) {
            errores.push("El apellido debe tener al menos 2 carácteres");
        }

        if(correo.value == ""){
            errores.push("El correo debe estar lleno");
        } else if(!correo.value.includes("@")) {
            errores.push("El correo debe ser válido");
        }

        if(contra.value == ""){
            errores.push("La contraseña debe estar llena");
        } else if(contra.value.length < 8) {
            errores.push("La contraseña debe tener al menos 8 carácteres");
        }

        if(imagen.value != "" && imagen.value != undefined){
            
            let fileName = ""
            fileName = this.value.substr(this.value.lastIndexOf('\\') + 1).split('.')[0];
            let ext = ""
            ext = fileName.value.split('.')[1];

            if(ext != "jpeg" && ext != "jpg" && ext != "png"){
                errores.push("La imagen tiene que ser jpg, jpeg o png");
            }
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