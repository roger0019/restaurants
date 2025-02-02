import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Search from '../screens/Search'

const Stack = createStackNavigator()

export default function SearchStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="search"//reconocer internamente
                component={Search} // el conponente que va a usar
                options={{
                    title:"Buscar"
                }}
            />

        </Stack.Navigator>


    )
}