import React from 'react'
import useReq from './../../hooks/useReq';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

function Buscar() {
    const [statusRequisicao, dados] = useReq(URL);

    return (
        <div>
            <h1>Buscar...</h1>

       <p>{statusRequisicao === 'buscando' && 'buscando...'}</p>
       <div>
         {statusRequisicao === 'encontrado' &&
          dados.drinks.map((key) => {
            return (
              <ul>
                <li key={key.idDrink}>{key.strDrink}</li>
              </ul>
            );
          })}
      </div>
        </div>
    )
}

export default Buscar
