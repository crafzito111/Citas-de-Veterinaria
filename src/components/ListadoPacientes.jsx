import Paciente from "./Paciente"
import PacientesTitle from "./PacientesTitle"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen">
              <PacientesTitle pacientes={pacientes}/>

        <div className={`border-red-500 overflow-y-scroll md:h-full mt-6 `}>
                <>
                   

                    { pacientes.map( paciente => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
          
        </div>
        </div>
    )
}

export default ListadoPacientes
