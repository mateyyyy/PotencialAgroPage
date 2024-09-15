import './App.css'
import Descripcion from './components/Descripcion'
import LogoDiv from './components/logoDiv'
import SegundoApartado from './components/SegundoApartado'
import TercerApartado from './components/TercerApartado'


function App() {

  return (
    <div id='ContainerGral'>
      <div id='PrincipalDiv'>
        <LogoDiv></LogoDiv>
      </div>
      <div id='TercerDiv'>
        <TercerApartado></TercerApartado>
      </div>
      <div id='SecundaryDiv'>
        <SegundoApartado></SegundoApartado>
      </div>

    </div>
  )
}

export default App
