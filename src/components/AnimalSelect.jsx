import React from 'react'

const AnimalSelect = ({animal, setAnimal}) => {
  return (
    <div className='mb-5'>
        <label for="pet-select" className='block text-gray-700 uppercase font-bold'>Animal</label>

<select 
name="pets" 
id="pet-select" 
className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
value={animal}
onChange={ (e) => setAnimal(e.target.value) }
>
    <option value="">--Elija una opción--</option>
    <option value="perro">Perro</option>
    <option value="gato">Gato</option>
    <option value="hamster">Hamster</option>
    <option value="conejo">Conejo</option>
    <option value="caballo">Caballo</option>
    <option value="vaca">Vaca</option>
    <option value="loro">Loro</option>
    <option value="serpiente">Serpiente</option>
</select>
    </div>
  )
}

export default AnimalSelect