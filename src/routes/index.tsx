import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { Background } from "../components/Background";


import { AuthRouts } from "./auth.routes";

export function Routes() {
    return (
        <NavigationContainer>
            <AuthRouts />
        </NavigationContainer>

    )
}