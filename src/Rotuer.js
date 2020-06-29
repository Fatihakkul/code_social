import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import {LoginPage,RegisterPage,MainPage,Favorite} from './pages'

const Stack=createStackNavigator();
const Tab = createBottomTabNavigator();


function Main(){
    return(
        <Tab.Navigator initialRouteName="MainPage"> 
            <Tab.Screen name="FavoritePage" component={Favorite} />
            <Tab.Screen name="MainPage" component={MainPage} />
           
        </Tab.Navigator>
    )
}

function Rotuer(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginPage">
                <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown : false}}/> 
                <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown : false}}/>
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Rotuer