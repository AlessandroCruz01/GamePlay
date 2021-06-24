//https://reactnavigation.org/docs/getting-started/

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/Signin'
import { AppoitmentDetails } from '../screens/AppoitmentDetails'

import { theme } from '../global/styles/theme'
import { AppoitmentCreate } from '../screens/AppoitmentCreate'

const { Navigator, Screen } = createStackNavigator()

export function AuthRouts() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >

            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="AppoitmentDetails"
                component={AppoitmentDetails}
            />


            <Screen
                name="AppoitmentCreate"
                component={AppoitmentCreate}
            />


        </Navigator>
    )
}