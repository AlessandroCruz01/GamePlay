import React, {
    createContext,
    useContext,
    useState,
    ReactNode // representa um nó
} from "react";

import * as AuthSession from 'expo-auth-session'
import { api } from "../services/api";

const { REDIRECT_URI } = process.env;
const { SCOPE } = process.env;
const { RESPONSE_TYPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;

type User = {
    id: string,
    username: string,
    firstName: string,
    avatar: string,
    email: string,
    token: string
}

type AuthContextData = {
    user: User;
    loading: boolean
    signIn: () => Promise<void>
}

type AuthProviderProps = {
    children: ReactNode //Represnta um filho
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string
        error?: string
    }
}

export const AuthContext = createContext({} as AuthContextData)


function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)

    async function signIn() {
        try {
            setLoading(true)

            //Houve um erro ao receber a url pelo authUrl, entao usei Replaces para fazer a correção

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID?.replace(';', '')}&redirect_uri=${REDIRECT_URI?.replace(';', '')}&response_type=${RESPONSE_TYPE?.replace(';', '')}&scope=${SCOPE?.replace(';', '')}`
            // console.log(authUrl)
            const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse

            if (type === 'success' && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`

                const userInfo = await api.get('/users/@me')

                const firstName = userInfo.data.username.split(' '[0])
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`
                setUser({
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                })
            }

        } catch {
            throw new Error('Não foi possivel altenticar!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, signIn, loading }}>
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