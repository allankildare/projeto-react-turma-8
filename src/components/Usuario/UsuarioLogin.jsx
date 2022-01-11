import { useContext, useState } from 'react'
import { UserContext } from './../../context'

function UsuarioLogin () {
    //aqui usamos o useContext para usar o contexto que já foi criado pelo createContext - useContext(contextoJaCriado) e desestruturamos para pegar login que é o que é retornado no Provider no value={{user, login}}
   const { login } = useContext(UserContext);
   
   //estado para controlar o input do usuário
   const [name, setName] = useState();
   
   //função manipuladora do evento de onChange - poderia ser diretamente na tag com arrow function anônima pois é uma função bem simples
   const handleChange = (event) => setName(event.target.value)
   
   return (
    <div>
       <label>Digite seu nome:</label>
       <input type="text" onChange={handleChange}/>
       <button onClick={() => login(name)}>Enviar!</button>
    </div>
   )
}

export default UsuarioLogin
