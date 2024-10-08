import React from "react"
import Listadonombres from "./componentes/Listado_nombres";
import Contador_Hook from "./componentes/Contador_hook";
import Contador from "./componentes/Contador";
import Pokemones from "./componentes/Pokemones";
import Referencia from "./componentes/Referencia";
import "./App.css"

const App = () => {
  return <div className="container">
    <Listadonombres/>
    <hr/>
    <Contador/>
    <hr/>
    <Pokemones/>
    <hr/>
    <Referencia/>
    <hr/>
  
  </div>
}

export default App;