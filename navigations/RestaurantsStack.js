import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Restaurants from '../screens/Restaurants'

const Stack = createStackNavigator()

export default function RestaurantsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="restaurants"//reconocer internamente
                component={Restaurants} // el conponente que va a usar
                options={{
                    title:"Restaurantes"
                }}
            />

        </Stack.Navigator>


    )
}