import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import config from '../config'; // Importa tu configuración

const URL = `${config.api.URL}`;

const ModificarCliente = () => {

  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [documento, setDocumento] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  //Funcion modificar
  const modificarCliente = async(e) => {
    e.preventDefault();
    await axios.put(`${URL}/${id}`, {
      nombres: nombres,
      apellidos: apellidos,
      documento: documento,
      correo: correo,
      telefono: telefono,
      direccion: direccion
    })
    navigate('/clientes')
  }

  useEffect(() => {
    getClientesById();
    // eslint-disable-next-line
}, [])


const getClientesById = async() => {
  const resultados = await axios.get(`${URL}/${id}`)
  setNombres(resultados.data.nombres);
  setApellidos(resultados.data.apellidos);
  setDocumento(resultados.data.documento);
  setCorreo(resultados.data.correo);
  setDireccion(resultados.data.direccion);
  setTelefono(resultados.data.telefono);
}

  return (
    <div>
        <h3>Formulario Modificar Cliente</h3>
        <form onSubmit={modificarCliente}>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Nombres</label>
            <input value={nombres} onChange={(e) => setNombres(e.target.value)} type='text' className="form-control"/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="" className="form-label">Apellidos</label>
            <input value={apellidos} onChange={(e) => setApellidos(e.target.value)} type='text' className="form-control"/>
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Documento</label>
            <input value={documento} onChange={(e) => setDocumento(e.target.value)} type='number' className="form-control"/>
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Correo</label>
            <input value={correo} onChange={(e) => setCorreo(e.target.value)} type='text' className="form-control"/>
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Telefono</label>
            <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type='number' className="form-control"/>
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Direccion</label>
            <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type='text' className="form-control"/>
          </div>

          <button type="submit" className="btn btn-primary">
            Modificar
          </button>

        </form>
    </div>
  )
}

export default ModificarCliente