import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import {LoginPage,RegisterPage,MainPage,Favorite,Splash} from './pages'
import Provider from './context/Provider'

const Stack=createStackNavigator();
const Tab = createBottomTabNavigator();


function Main(){
    return(
        <Tab.Navigator initialRouteName="MainPage"> 
            <Tab.Screen name="FavoritePage" component={Favorite} options={{ title : "Favoriler"}} />
            <Tab.Screen name="MainPage" component={MainPage}  options={{ title : "Gönderiler" }} />
           
        </Tab.Navigator>
    )
}

function Rotuer(){
    return(
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SplashPage">
                    <Stack.Screen name='SplashPage' component={Splash} />
                    <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown : false}}/> 
                    <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown : false}}/>
                    <Stack.Screen name="Main" component={Main}  options={{headerShown : false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
export default Rotuer