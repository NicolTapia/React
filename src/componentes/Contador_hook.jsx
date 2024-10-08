import React, { useEffect, useState} from "react"

const Contador =()=>{
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

   //funcionamiento por defecto
    useEffect(()=>{
        console.log("Contador: ", contador)
    }, [contador]);

    //useEffect una sola vez
    useEffect(()=>{
        console.log("una sola vez")
    },[]);

    //useEffect con control
    useEffect(()=>{
        console.log("Contador2: *", contador2)
    },[contador2]);

    return <div>
        <p>Valor actual contador = {contador}</p>
        <button class= "boton" onClick={()=> {setContador2 (contador2 + 1)}}>
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