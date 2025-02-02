import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import RestaurantsStack from '../navigations/RestaurantsStack'
import FavoritesStack from '../navigations/FavoritesStack'
import TopRestaurantsStack from '../navigations/TopRestaurantsStack'
import SearchStack from '../navigations/SearchStack'
import AccountStack from '../navigations/AccountStack'
 

const Tab = createBottomTabNavigator()



export default function Navigation(){

    return(
        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen
                    name="restaurants"         //nombre como se va a reconocer internamente
                    component={RestaurantsStack}   //que objeto va a resderizar       
                    options={{
                        title: "Restaurantes", headerShown:false
                    }}
                />

                <Tab.Screen
                    name="favorites"         //nombre como se va a reconocer internamente
                    component={FavoritesStack}   //que objeto va a resderizar       
                    options={{
                        title: "Favoritos", headerShown:false
                    }}
                
                />


                <Tab.Screen
                    name="top-Restaurants"         //nombre como se va a reconocer internamente
                    component={TopRestaurantsStack}   //que objeto va a resderizar       
                    options={{
                        title: "Top Restaurantes", headerShown:false
                    }}
                />


<               Tab.Screen
                    name="search"         //nombre como se va a reconocer internamente
                    component={SearchStack}   //que objeto va a resderizar       
                    options={{
                        title: "Buscar", headerShown:false
                    }}
                />


                <Tab.Screen
                    name="account"         //nombre como se va a reconocer internamente
                    component={AccountStack}   //que objeto va a resderizar       
                    options={{
                        title: "Cuenta", headerShown:false 
                    }}
               />

            </Tab.Navigator>
        </NavigationContainer>

    )


}



