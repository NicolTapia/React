import React, {useState} from "react"

const Contador =()=>{
    const [contador, setContador] = useState(0);
    

    return <div>
        <p>Valor actual contador = {contador}</p>
        <button class= "boton" onClick={()=> {setContador (contador + 1)}}>
            Aumentar
        </button>
        <button class= "boton" onClick={()=> {setContador (contador-1)}}>
            Diminuir
        </button>
        <button class= "boton" onClick={()=> {setContador (0)}}>
            Restablecer
        </button>
    </div>
}

export default Contador;