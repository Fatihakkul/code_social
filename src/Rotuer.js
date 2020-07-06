import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import {LoginPage,RegisterPage,MainPage,Favorite,UploadScreen} from './pages'
import Provider from './context/Provider'

const Stack=createStackNavigator();
const Tab = createBottomTabNavigator();


function Main(){
    return(
        <Tab.Navigator initialRouteName="MainPage"> 
            <Tab.Screen name="FavoritePage" component={Favorite} options={{ title : "Favoriler"}} />
            <Tab.Screen name="MainPage" component={MainPage}  options={{ title : "Gönderiler" }} />
           <Tab.Screen name="UploadScreen" component={UploadScreen} options={{title : "Foto Yükle"}} />
        </Tab.Navigator>
    )
}

function Rotuer(){
    return(
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="LoginPage">
                    <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown : false}}/> 
                    <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown : false}}/>
                    <Stack.Screen name="Main" component={Main}  options={{headerShown : false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
export default Rotuer