import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from "../hooks/useSelectMonedas"
import {monedas} from "../data/monedas"


const InputSubmit = styled.input`
background-color: #9497ff;
border:none;
width:100%;
padding: 10px;
color: #fff;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
transition: background-color .3s ease;

&:hover {
    background-color: #7A7DFE;
    cursor: pointer;
}
`
const Formulario = ({setMonedas}) => {
    
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)
    
    {/*Estoy utilizando mi Hook, dos veces para propósitos distinto, da igual que las variables sean distintas 
    Cada Hook, tendrá su estado independiente*/}
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos)
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            

            const arrayCriptos = resultado.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name, 
                    nombre: cripto.CoinInfo.FullName
            
                }
                return objeto
            })
            setCriptos(arrayCriptos)
        }
        consultarAPI();
    },[])


    const handleSubmit = evento => {
        evento.preventDefault()
        {/*En caso de que incluya uno de los dos vacío, devuelve un error */}
        if ([moneda, criptomoneda].includes('')) {
            setError(true)
            return 
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }




    return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error> }
      <form  onSubmit={handleSubmit}>
          <SelectMonedas />
         <SelectCriptomoneda />
          
          <InputSubmit type="submit" value="Consultar" />
      </form>
      </>
  )
}

export default Formulario