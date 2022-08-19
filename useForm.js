//Lo que hace este custome hook es desestructurar el estado del formulario
//y retorna el las caracteristicas del objeto y 
//Cambia si cambia en el formulario

import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    
      const onInputChange = ({target}) =>{
        const {name,value} = target;
        setFormState({
          ...formState,
          [name]:value 
        })
      }

      const onResetForm = ()=>{
        setFormState(initialForm)
      }

      return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
      }
  
}
