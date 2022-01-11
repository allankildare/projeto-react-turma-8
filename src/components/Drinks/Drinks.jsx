import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AleatoryDrink, StyledDrinks, StyledLinks } from './styles'

const DRINKS_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

export default function Drinks() {
    const [drink, setDrink] = useState({drinks: []})

    const reqDrinks = async (url) => {
        const response = await fetch(url)
        const json = await response.json()
        setDrink(json)
    }

    useEffect(() => {
        reqDrinks(DRINKS_ENDPOINT)
    }, [])

    const { idDrink, strDrink, strCategory, strDrinkThumb } = drink.drinks[0] || {}

    return (
        <StyledDrinks>
            <h3>Gostaria de explorar drinks?</h3>
            <AleatoryDrink>
                <div>
                    <img src={strDrinkThumb} alt={`Imagem do drink ${strDrink}`} />
                    <div>
                        <p><strong>{strDrink}</strong></p>
                        <p> <em>{strCategory}</em></p>
                        <p>ID: <b>{idDrink}</b></p>
                    </div>
                    <button onClick={() => reqDrinks(DRINKS_ENDPOINT)}>Buscar outro drink</button>
                </div>
            </AleatoryDrink>
            
            <StyledLinks>
                <Link to="populares">Drinks Populares</Link>
                <Link to="buscar-drinks">Buscar Drinks</Link>
            </StyledLinks>
            <Outlet />
        </StyledDrinks>
    )
}
