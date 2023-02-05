import { useState } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Formulario from "./Components/Formulario";
import '../src/Components/Formulario/Formulario.css'
import EmptyList from "./Components/EmptyList";
import Header from "./Components/Header";
import Table from "./Components/Table";

function App() {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
      <Header onOpenModal={onOpenModal} />
      <EmptyList />

      <Table
        socios={integrantesSociedade}
      />
      {open &&
        <Modal open={open} onClose={onCloseModal} center classNames={{ modal: 'modal' }}>
          <Formulario />
        </Modal>
      }

    </div>
  );
}

export default App;
