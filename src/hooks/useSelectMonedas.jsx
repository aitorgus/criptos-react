import React from "react";
import styled from "@emotion/styled"

const Label = styled.label`
    color: #fff;
`
const useSelectMonedas = (label) => {

    {/*Si usamos los ( ) -> retorna lo que contiene , es como un return */}
    const SelectMonedas = () => (

         <Label>{label}</Label>
    )
        
           
        return [SelectMonedas]
    }
export default useSelectMonedas
