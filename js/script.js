

function validar() {
    var ret_correo = validar_correo(); // Obligatorio
    var ret_comuna = validar_comuna(); // No Obligatorio
    var ret_hobbies = validar_hobby(); // No Obligatorio
    var ret_password = validar_password(); // Obligatorio
    var ret_passcheck = validar_passcheck(); // Obligatorio
    var ret_direccion = validar_direccion(); // Obligatorio
    var ret_fono = validar_fono(); // Obligatorio
    var ret_web = validar_web(); // No Obligatorio

    return ret_correo && ret_comuna && ret_password
     && ret_passcheck && ret_direccion && ret_hobbies 
     && ret_fono && ret_web;
}

function validar_correo() {
    var correo  = document.getElementById("correo").value;
    var div = document.getElementById("err_correo");
    var arroba = correo.indexOf("@");
    var punto = correo.indexOf(".");
    if (arroba < 1) {
        div.innerText = "El correo electrónico no tiene @ (arroba) o nombre de usuario";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 2) {
            div.innerText = "El nombre de usuario del correo no es válido";
            div.className = "text-danger";
            return false;
        } else {
            if (arroba + 3 > punto || punto + 1 >= correo.length - 1 ) {
                div.innerText = "El nombre de dominio no es válido";
                div.className = "text-danger";
                return false;
            } else {
                div.innerText = "";
                return true;
            }
        }
    }
}

function validar_web() {
    var web = document.getElementById("web").value;
    var div = document.getElementById("err_web");
    var cod1 = web.indexOf("http://")
    var cod2 = web.indexOf("https://")

    if (web == "") {
        div.innerText = "";
        return true ;
    } else if ((cod1 === 0 || cod2 === 0)) {
        div.innerText = "";
        return true;
    } else {
        div.innerText = "direccion web no valida";
        div.className = "text-danger"
    }
}

function validar_direccion() {
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("err_direccion");
    if (direccion == "") {
        div.innerText = "Ingrese una direccion";
        div.className = "text-danger";
    } else {
        div.innerText = "";
        return true}
}

function validar_password() {
    var password = document.getElementById("password").value;
    var div = document.getElementById("err_password");
    var letra = false;
    var numero = false;
    if (password.length < 4 || password.length > 6) {
        div.innerText = "La contraseña no cumple con los parámetros de longitud solicitados";
        div.className = "text-danger";
        return false;
    }
    for (var i = 0; i < password.length; i++) {
        var char = password[i];
        if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
            letra = true;
        } else if (char >= "0" && char <= "9") {
            numero = true;
        }
    }
    if (letra == true && numero == true) {
        div.innerText = ""
        return true;
    } else {
        div.innerText = "La contraseña no cumple con tener una letra y un número";
        div.className = "text-danger";
        return false;
    }
}

function validar_passcheck() {
    var password = document.getElementById("password").value;
    var passcheck = document.getElementById("pass_check").value;
    var div = document.getElementById("err_pass_check");
    if (passcheck != password) {
        
        div.innerText= "La contraseña no coincide con la original"
        div.className= "text-danger" 
        return false
    } else {
        div.innerText = ""
        return true
    }
}

function validar_comuna() {
    var comuna = document.getElementById("comuna").value;
    var div = document.getElementById("err_comuna");
    if (comuna == 0) {
        div.innerText = "Seleccione una comuna"
        div.className = "text-danger"
        return false;
    } else {
        div.innerText = "";
        return true
    }
}


function validar_fono() {
    var fono = document.getElementById("telefono").value;
    var div = document.getElementById("err_telefono");
    var numeracion = true;
    if (fono === "") {
        div.innerText = "Dejó el campo en blanco";
        div.className = "text-danger";
        return false;
    } 
    for (var i = 0; i < fono.length; i++) {
        var num = fono[i];
        if (!(num >= "0" && num <= "9")) {
            numeracion = false;
            break;
        }
    }
    if (numeracion) {
        div.innerText = ""
        return true;
    } else {
        div.innerText = "Error, ingrese su número de teléfono utilizando solo dígitos";
        div.className = "text-danger";
        return false;
    }
}

const hobbis = []

function hobby_insert() {
    var diva = document.getElementById("err_hobby");
    let input = document.getElementById("hobby");
    let char = input.value;
    if (char == "") {
        diva.innerText = "No puede ingresar un hobby en blanco";
        diva.className = "text-danger";
        return
    }
    
    hobbis.push(input.value);
    let div = document.getElementById("lista");
    div.innerHTML = "";
    let ul = document.createElement("ul");
    div.appendChild(ul);
    diva.innerText = "";
    for (let i = 0; i < hobbis.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = hobbis[i];
        ul.appendChild(li);
    }
    input.value = ""
}

function validar_hobby() {
    var div = document.getElementById("err_hobby");
    if (hobbis.length < 1) {
        div.innerText = "El número de hobbies que ingresó no supera el mínimo solicitado";
        div.className = "text-danger";
        return false;
    } else {
        if (hobbis.length >= 2) {
            div.innerText = "";
            return true;
        } else {
            div.innerText = "El número de hobbies que ingresó no alcanza el mínimo solicitado";
            div.className = "text-danger";
            return false;
        }
    }
}