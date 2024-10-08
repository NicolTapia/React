import React, { useState } from "react";

const Listadonombres = () => {
    const [nombre, setNombre] = useState("");
    const [nombres, setNombres] = useState([]);

    const guardar = () => {
        setNombres([...nombres, nombre]);
        setNombre("");
    }
    return (
        <div className="container">
            <p>Ingresa un nombre: </p>
            <input class="cajon" placeholder="Ingrese un nombre" type="text" value={nombre} onChange={(e) => [setNombre(e.target.value)]} />
            <button class="boton" onClick={guardar}>Enviar</button>

            <ul className="listado">
                {
                    nombres.map((elemento, index) =>{
                        return <li>{elemento}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Listadonombres;