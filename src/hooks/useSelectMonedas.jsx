import {useState} from "react";
import styled from "@emotion/styled"

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15 px 0;

`
const Select = styled.select`
    width:100%;
    font-size: 18px;
    padding: 14px;
    border-radius:10px;
    margin-top: 20px;
    margin-bottom:20px;



`
const useSelectMonedas = (label, opciones) => {
    const [state, setState] = useState('')

    {/*Si usamos los ( ) -> retorna lo que contiene , es como un return */}
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            
            <Select
                value={state}
                onChange={evento => setState(evento.target.value)}
            >
                 <option value="">Seleccione</option>
                {opciones.map( opcion => (
                    <option 
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </Select>
            </>
    )
        
           {/*Retorno el State , que recae sobre moneda y criptomoneda */}
        return [state, SelectMonedas]
    }
export default useSelectMonedas
