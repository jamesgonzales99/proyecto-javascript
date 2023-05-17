function calcularEdad() {
    let nombre = prompt("ingrese su nombre");
    let apellido = prompt("ingrese su apellido");
    let edad = prompt("ingresa tu edad");
    let categoria ;

    if (edad >= 1 && edad <= 10 ) {
         categoria = "niño";
    }else if (edad >= 10 && edad <= 13){
         categoria = "pre-adolecente";
    }else if (edad >= 14 && edad <= 18) {
         categoria = "adolecente";
    }else if (edad >= 19 && edad <= 25) {
         categoria = "joven";
    }else if (edad >= 26 && edad <= 59) {
         categoria = "adulto";
    }else if (edad >= 60 && edad <= 75){
         categoria = "viejo";
   }else if (edad >= 76 && edad <= 110) {
         categoria = "muy viejo";
   }else {
        categoria = "edad no valida";
   }           

    while (edad > 111) {
         alert("ni que fueras dinosaurio");
         edad =prompt("ingresa una edad menor");
    }
    alert("hola " + nombre + " " + apellido + "\ntu edad es de: " + edad + " " + "años \n" + "tu categoria de vida es de: " + categoria);
}
calcularEdad();
