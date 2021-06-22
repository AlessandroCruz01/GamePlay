//https://reactnavigation.org/docs/getting-started/

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/Signin'

const { Navigator, Screen } = createStackNavigator()

export function AuthRouts() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >

            <Screen
                name="SignIn"
                component={SignIn}
            />

            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}