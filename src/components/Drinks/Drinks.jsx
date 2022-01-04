import React, { useState, useEffect } from 'react'

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
        <div>
            <img src={strDrinkThumb} alt={`Imagem do drink ${strDrink}`} />
            <p>Nome: <strong>{strDrink}</strong></p>
            <p>Categoria: <em>{strCategory}</em></p>
            <p>ID: {idDrink}</p>
            <button onClick={() => reqDrinks(DRINKS_ENDPOINT)}>Não gostei! Outro drink por favor</button>
        </div>
    )
}
