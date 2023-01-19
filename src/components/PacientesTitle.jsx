import React from 'react'

const PacientesTitle = ({pacientes}) => {
    
  return (

    
    <div className='animate__animated animate__zoomIn'>
          {pacientes && pacientes.length ? (
            <>
                    <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
                    <p className={`text-lg mt-5 text-center`}>Administrar {""}
                    <span className='text-indigo-600 font-bold'>Pacientes Ingresados</span>
                    </p>
            </>

                    
                ) : (
                   <>
                    <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
                    <p className={`text-lg mt-5 text-center `}>Llena el Formulario para {""}
                    <span className='text-indigo-600 font-bold'>Registrarlo</span>
                    </p></>
                    )}
    </div>
  )
}

export default PacientesTitle