import React from "react"
import Listadonombres from "./componentes/Listado_nombres";
import Contador_Hook from "./componentes/Contador_hook";
import Contador from "./componentes/Contador";
import Pokemones from "./componentes/Pokemones";

import "./App.css"

const App = () => {
  return <div className="container">{
    //<Listadonombres/>
    //<Contador/>
    <Pokemones/>
  }
  </div>
}

export default App;