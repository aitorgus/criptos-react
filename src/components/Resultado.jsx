import styled from "@emotion/styled"

const Contenedor = styled.div`
color: #fff;
font-family: 'Lato', sans-serif;
display:flex;
align-items: center;
gap: 1rem;
margin-top:30px;
`
const Imagen = styled.img`
display:block;
width: 120px;


`


const Texto = styled.p`
font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {
    const {PRICE, HIGHDAY, LOWDAY ,CHANGEPCT24HOUR,IMAGEURL, LASTUPDATE} = resultado
  return (
      <Contenedor>
          {/*lA IMAGEN nos daría error, si no le indicamos la URL exacta, para ello, utilizo un template string para insertar el nombre de la imagen */}
          <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        
          <div>
          <Precio>El precio es de : <span>{PRICE}</span></Precio>
          <Texto>Precio mas alto del día : <span>{HIGHDAY}</span></Texto>
          <Texto>Precio mas bajo del día: <span>{LOWDAY}</span></Texto>
          <Texto>Variación en las últimas 24h: <span>{CHANGEPCT24HOUR}</span></Texto>
          <Texto> Última actualización: <span>{LASTUPDATE}</span></Texto>
          </div>
          
      
      </Contenedor>
  )
}

export default Resultado