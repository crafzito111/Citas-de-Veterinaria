import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [loading, setLoading] = useState(false)
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1700);
  }, [])

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }



  return (
  <>
  {
    loading ?

  <div className='flex justify-center items-center  h-screen'>
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster  ">
	<div className="wheel"></div>
	<div className="hamster">
		<div className="hamster__body">
			<div className="hamster__head">
				<div className="hamster__ear"></div>
				<div className="hamster__eye"></div>
				<div className="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>

  </div>

    :

    <div className="container mx-auto mt-20">
    <Header />

    <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
    </div>

  </div>
  }
 
  </>
  
  )
}

export default App
