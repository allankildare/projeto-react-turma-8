import { createContext, useState } from "react"

export const UserContext = createContext(
    { nome: '' }
)

export const UserProvider = ({children}) => {
    const [user, setUser] = useState('')

    const login = nome => {
        setUser(nome)
    }

    return (
        <UserContext.Provider value={{ user, login }}>
            {children}
        </UserContext.Provider>
    )
}