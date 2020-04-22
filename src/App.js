import React, {useState} from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Resumen from "./componentes/Resumen";
import Resiltado from "./componentes/Resultado";

import styled from "@emotion/styled";
import Resultado from "./componentes/Resultado";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  //Definir useState del componente
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      year: '',
      plan: ''
    }
  });

  const {cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header 
        titulo="Cotizador de seguros" 
      />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
        />

        <Resumen
          datos={datos}
        />

        <Resultado
          cotizacion={cotizacion}
        />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
