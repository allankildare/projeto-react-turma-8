import React, { useState, useEffect } from 'react'

function ComponenteDesmontavel() {
    useEffect(() => {
        // efeito que voce deseja
        return () => {
            console.log('Fui desmontado')
        }
    }, [])

    return <p>Estou montado</p>
}

const ExemploState = () => {
    const [contador, setContador] = useState(0)
    const [isOpen, setIsOpen] = useState(true)

    function handleContador() {
        setContador(contador + 1)
    }

    useEffect(() => {
        console.log('Fui montado')
    }, [])

    useEffect(() => {
        console.log('Fui atualizado')
    }, [contador])
    
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column' }}>
        <p>{contador}</p>
        <button onClick={handleContador}>Mais um!</button>
        
        {isOpen ? <ComponenteDesmontavel/> : <p>Estou desmontado</p>}
        
        <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Desmonta' : 'Monta'}
        </button>
    </div>)
}

export default ExemploState