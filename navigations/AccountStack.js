import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Account from '../screens/Account'

const Stack = createStackNavigator()

export default function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="acount"//reconocer internamente
                component={Account} // el conponente que va a usar
                options={{
                    title:"Cuenta"
                }}
            />

        </Stack.Navigator>


    )
}