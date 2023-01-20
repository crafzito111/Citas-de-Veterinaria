import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, propietario, telefono, fecha, sintomas, id, raza, peso, edad, animal } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?');

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="animate__animated animate__zoomIn mx-5 my-4 bg-white shadow-md rounded-xl">
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography ><p className='flex gap-7 '>
           <span className='font-bold  text-gray-700  normal-case '> Propietario: {propietario}</span>
            <span className='font-bold  text-gray-700  normal-case'>Mascota: {nombre}</span>
            <span className='font-bold  text-gray-700  normal-case'>Animal: {animal}</span>
            </p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {/* <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p> */}

            <p className="font-bold mb-3 text-gray-700 uppercase">Telefono: {''}
                <span className="font-normal normal-case">{telefono}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Ingreso: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Raza: {''}
                <span className="font-normal normal-case">{raza}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Peso: {''}
                <span className="font-normal normal-case">{peso} kg</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Edad: {''}
                <span className="font-normal normal-case">{edad}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex gap-2 justify-end">
                <button 
                    type="button"
                    className="py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
                    onClick={() => setPaciente(paciente)}
                ><i class="fa-solid fa-pen-to-square"></i></button>

                <button 
                    type="button"
                    className="py-2 px-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
                    onClick={handleEliminar}
                ><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
          
        </div>
    )
}

export default Paciente
