import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { Background } from "../components/Background";


import { AuthRouts } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { SignIn } from '../screens/Signin'


export function Routes() {
    const { user } = useAuth()

    return (
        <NavigationContainer>
            {user.id ? <AuthRouts /> : <SignIn />}
        </NavigationContainer>

    )
}