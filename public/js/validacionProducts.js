window.addEventListener("load", function() {

    console.log("Estoy conectado")

    let nombre = document.querySelector(".nombre");
    let desc = document.querySelector(".desc");
    let mainPic = document.querySelector(".mainPic");
    let thumbnail = document.querySelector(".thumbnail");
    let form = document.querySelector(".form_product");

    nombre.addEventListener("focus", function(e){
        nombre.addEventListener("keypress", function(e){
            if(this.value.length < 5){
                this.classList.add("invalid");
                this.classList.remove("valid");
            }else{
                this.classList.add("valid");
                this.classList.remove("invalid");
            }
        })
    })

    desc.addEventListener("focus", function(e){
        desc.addEventListener("keypress", function(e){
            if(this.value.length < 20){
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
        } else if(nombre.value.length < 5) {
            errores.push("El nombre debe tener al menos 5 carácteres");
        }

        if(desc.value == ""){
            errores.push("La descripción debe estar lleno");
        } else if(desc.value.length < 20) {
            errores.push("La descripción debe tener al menos 20 carácteres");
        }

        if(mainPic.value != "" && mainPic.value != undefined){
            
            let fileName = ""
            fileName = this.value.substr(this.value.lastIndexOf('\\') + 1).split('.')[0];
            let ext = ""
            ext = fileName.value.split('.')[1];

            if(ext != "jpeg" && ext != "jpg" && ext != "png"){
                errores.push("La imagen tiene que ser jpg, jpeg o png");
            }
        }

        if(thumbnail.value != "" && thumbnail.value != undefined){
            
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