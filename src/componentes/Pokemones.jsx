import React, {useEffect, useState}from "react";

const Pokemones = () => {
    //Definir variables, pokemon contiene valor actual
    //setPokemon es la función para actualizar ese valor cuando obtengas los datos de la API.
    //useState, es un hook que permite agregar un estado a un componente
    //Se llama con un valor inicial, en este caso es un array vacío
    // devuelve los elementos pokemones y la funcion para cambiarlo (setPokemones)
    const [pokemones, setPokemones]= useState([]);

    const[anterior,  setAnterior] = useState([null]);
    const[siguiente, setSiguiente] = useState([null]);
    const[actual, setActual] = useState(['https://pokeapi.co/api/v2/pokemon?limit=10&offset=0']);


    useEffect(()=> {
        async function obtenerPokemones(){
            const response = await fetch (actual);
            const data = await response.json();
            console.log(data);
            setPokemones(data.results);
            setAnterior(data.previous);
            setSiguiente(data.next);
        }
        obtenerPokemones();
    },[actual])

    return (
        //map recorre el array, dentro de map estan los parametros
        //Para cada Pokémon, se genera un párrafo <p> con el nombre de ese Pokémon como su contenido.
        <div>
            <ul>
                <p>Listado de Pokemones</p>
                {pokemones.map((pokemon, index) => {
                    return <li className="listado" key = {index}>{pokemon.name}</li>
                
            })}
        </ul> 
        <button className="botonNaranjo" onClick={() => anterior !== null && setActual(anterior)}>Anterior</button>
        <button className="botonNaranjo" onClick={() => siguiente !== null && setActual(siguiente)}>Siguiente</button>
        </div>       
    )
}

export default Pokemones