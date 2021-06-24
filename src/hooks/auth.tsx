import React, {
    createContext,
    useContext,
    useState,
    ReactNode // representa um nó
} from "react";

type User = {
    id: string,
    username: string,
    firstName: string,
    avatar: string,
    email: string,
    token: string
}

type AuthContextData = {

}

type AuthProviderProps = {
    children: ReactNode //Represnta um filho
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User)

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export {
    AuthProvider,
    useAuth,
}