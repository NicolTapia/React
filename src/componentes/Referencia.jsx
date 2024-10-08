import React, {useRef} from "react";  

const Referencia = () => {

    const inputRef = useRef();
    //forma larga
    const handleFocus= () => {
        const input = document.getElementById("input-focus");
        input.focus();
    }

    return (
        <div>
            <h1>Referencia</h1>
            {/* Sintaxis con useRef */}
            <input type="text" ref={inputRef}/>
            <button className="botonRojo" onClick={()=>inputRef.current.focus()}>Focus</button>

            {/* sintaxis larga */}
            <input type="text" id='input-focus'/>
            <button className="botonRojo" onClick={handleFocus}>Focus2</button>

        </div>
    )
}

export default Referencia