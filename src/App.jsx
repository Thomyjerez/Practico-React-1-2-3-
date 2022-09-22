import TituloPrincipal from "./components/TituloPrincipal";
import './style.css'


function App() {
  
  const mensaje = 'my friend!';

  return (
    <section> 
    <TituloPrincipal msjInsertado={mensaje}>
      
    </TituloPrincipal>
    
    
    </section>
  );
}

export default App;
