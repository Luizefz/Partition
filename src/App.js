import { useState } from "react";
import EmptyList from "./Components/EmptyList";
import Header from "./Components/Header";
import Table from "./Components/Table";

function App() {

  const integrantesSociedade = [
    { firstName: "Luiz", lastName: "Ferreira", percent: 50 },
    { firstName: "Luiz", lastName: "Ferreira", percent: 50 },
    { firstName: "Luiz", lastName: "Ferreira", percent: 50 }]

  // const [integrantesSociedade, setIntegrantesSociedade] = useState([[]])

  // const addNovoSocio = (socio) => {
  //   setIntegrantesSociedade([...integrantesSociedade, socio])
  // }

  return (
    <div className="App">
      <Header />
      <EmptyList />

      <Table
        socios={integrantesSociedade}
      />

    </div>
  );
}

export default App;
