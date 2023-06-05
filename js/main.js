const figurasPokemon = [
     { nombre: "Pikachu", tipo: "Eléctrico" },
     { nombre: "Charizard", tipo: "Fuego" },
     { nombre: "Bulbasaur", tipo: "Planta" },
     { nombre: "Squirtle", tipo: "Agua" },
     { nombre: "Jigglypuff", tipo: "Hada" }
   ];
   
   let figurasSeleccionadas = [];
   
   function seleccionarPokemon() {
     const figura = prompt("selecciona una figura de Pokemon:\n" +
       "1. Pikachu\n" +
       "2. Charizard\n" +
       "3. Bulbasaur\n" +
       "4. Squirtle\n" +
       "5. Jigglypuff\n\n" +
       "ingresa el numero correspondiente:");
   
     return figurasPokemon[figura - 1];
   }
   
   function ingresarCantidad() {
     const cantidad = prompt("ingresa la cantidad de figuras de Pokemon que quieras tener:");
     return +cantidad;
   }
   
   function comprarOtroPokemon() {
     const opcion = prompt("¿Desea comprar otro Pokemon? (Si/No)").toLowerCase();
     return opcion === "si";
   }
   
   do {
     const pokemon = seleccionarPokemon();
     const cantidad = ingresarCantidad();
   
     figurasSeleccionadas.push({ pokemon, cantidad });
   } while (comprarOtroPokemon());
   
   let mensaje = "has elejido :\n\n";
   for (const figuraSeleccionada of figurasSeleccionadas) {
     const figura = figuraSeleccionada.pokemon.nombre;
     const cantidad = figuraSeleccionada.cantidad;
     mensaje += "Pokemon: " + figura + " - Cantidad: " + cantidad + "\n";
   }
   
   alert(mensaje);
   
   const tipoBuscado = "Fuego";
   const pokemonTipoFuego = figurasPokemon.filter(function(pokemon) {
     return pokemon.tipo === tipoBuscado;
   });
   let mensajeTipoFuego = "Pokemons de tipo fuego:\n\n";
   for (const pokemon of pokemonTipoFuego) {
     mensajeTipoFuego += "Pokemon: " + pokemon.nombre + " - Tipo: " + pokemon.tipo + "\n";
   }
   alert(mensajeTipoFuego);
   
   const nombreBuscado = "Pikachu";
   const pokemonEncontrado = figurasPokemon.find(function(pokemon) {
     return pokemon.nombre === nombreBuscado;
   });
   let mensajePokemonEncontrado = "Pokemon encontrado:\n\n";
   mensajePokemonEncontrado += "Pokemon: " + pokemonEncontrado.nombre + " - Tipo: " + pokemonEncontrado.tipo;
   alert(mensajePokemonEncontrado);
   
