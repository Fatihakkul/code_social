import React,{useEffect} from 'react'
import {SafeAreaView,View,Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const Splash =(props)=>{
    useEffect(() => {
        AsyncStorage
            .getItem('@USER_ID')
            .then(res=>{
                if(res == null){
                    props.navigation.navigate('LoginPage')
                }else{
                    props.navigation.navigate('Main')
                }
            })
    }, [])
    
        return(
            <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View style={{flex:1}}>
                    <Text>UYgulama Açılıyor</Text>
                </View>
            </SafeAreaView>
        )
}
export {Splash}