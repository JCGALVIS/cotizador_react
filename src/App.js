import React, {useState} from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Resumen from "./componentes/Resumen";

import styled from "@emotion/styled";

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

  const { datos } = resumen;

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
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
