import React, { Component } from 'react'

export default class Drinks extends Component {
    constructor(props) {
        super(props)
        this.reqDrinks = this.reqDrinks.bind(this)
        this.url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
    }
    
    // request eh feita apos o clique do botao,
    // como poderiamos fazer para isso ser feito no carregamento da pagina?
    async reqDrinks() {
        const response = await fetch(this.url)
        const json = await response.json()
        return json
    }

    render() {
        return (
            <div>
                <button onClick={this.reqDrinks}>Fazer request</button>
            </div>
        )
    }
}
