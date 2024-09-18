import './App.css'
import LogoDiv from './components/LogoDiv';
import TercerApartado from './components/TercerApartado'
import SegundoApartado from './components/SegundoApartado'
import Footer from './components/Footer';
import ProyectoApartado from './components/ProyectoApartado';

function App() {

  return (
    <div id='ContainerGral'>
      <div id='PrincipalDiv'>
        <LogoDiv></LogoDiv>
      </div>

      <div id='SecundaryDiv'>
        <SegundoApartado></SegundoApartado>
      </div>

    
      <div id='TercerDiv'>
        <TercerApartado></TercerApartado>
      </div>

      <div id='DocumentacionDiv'>
        <ProyectoApartado/>
      </div>


      <div id='PiePagina'>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default App
