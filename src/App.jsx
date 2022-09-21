import Msj from "./components/Msj";
import TituloPrincipal from "./components/TituloPrincipal";
import './style.css'


function App() {
  
  const mensaje = 'my friend!';

  return (
    <section> 
    <TituloPrincipal msjInsertado={mensaje} />
    <hr />
    <Msj></Msj>
    </section>
  );
}

export default App;
