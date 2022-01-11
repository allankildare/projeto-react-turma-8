import React, { useContext } from 'react'
import { UserContext } from './../../context'

function Usuario() {
    const { user } = useContext(UserContext)

    return (
        <header>
            <p>Usuária(o): {user !== '' ? user : 'Sem login'}</p>
        </header>
    )
}

export default Usuario
