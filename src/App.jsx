import './App.css'
import AgregarCliente from './components/AgregarCliente'
import Footer from './components/Footer'
import Menu from './components/Menu'
import ModificarCliente from './components/ModificarCliente'
import MostrarClientes from './components/MostrarClientes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <Menu/>
      <BrowserRouter>
        <Routes>
          <Route path='/clientes' element={<MostrarClientes/>}/>
          <Route path='/clientes/agregar' element={<AgregarCliente/>}/>
          <Route path='/clientes/editar/:id' element={<ModificarCliente/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
export default App
