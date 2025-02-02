import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Favorites from '../screens/Favorites'

const Stack = createStackNavigator()

export default function FavoritesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="favorites"//reconocer internamente
                component={Favorites} // el conponente que va a usar
                options={{
                    title:"Favoritos"
                }}
            />

        </Stack.Navigator>


    )
}