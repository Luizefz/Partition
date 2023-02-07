import { useState } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Formulario from "./Components/Formulario";
import '../src/Components/Formulario/Formulario.css'
import Header from "./Components/Header";
import Table from "./Components/Table";
import PieChartSec from "./Components/PieChartSec";

function App() {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [integrantesSociedade, setIntegrantesSociedade] = useState([])

  const addNovoSocio = (socio) => {
    setIntegrantesSociedade([...integrantesSociedade, socio])
  }

  console.log(integrantesSociedade);

  return (
    <div className="App">
      <Header onOpenModal={onOpenModal} />

      <PieChartSec socios={integrantesSociedade} />

      {integrantesSociedade.length ? (
        <Table
          socios={integrantesSociedade}
        />
      ) : (
        null
      )}

      {open &&
        <Modal open={open} onClose={onCloseModal} center classNames={{ modal: 'modal' }}>
          <Formulario
            onCloseModal={onCloseModal}
            aoSocioCadastrado={socio => addNovoSocio(socio)}
          />
        </Modal>
      }

    </div>
  );
}

export default App;
