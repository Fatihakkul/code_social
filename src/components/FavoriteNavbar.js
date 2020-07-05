import React from 'react'
import {Text,Image,TouchableOpacity, View,Dimensions} from 'react-native'

const FavoriteNavbar =(props)=>{
        return(
            <View style={{backgroundColor :'#ffa000' , height : 45, width : Dimensions.get('window').width ,padding: 10,alignItems:'center' , flexDirection : 'row' , justifyContent : 'space-between' ,marginBottom : 8}}>
                <Text style={{color : 'white' ,fontSize :25, fontWeight : 'bold'}}>Favorilerim</Text>
            <TouchableOpacity onPress={props.onPress}>
                <Image  style={{width : 28 , height : 28}}  source={require('../assets/logout.png')}/>
            </TouchableOpacity>
            </View>
        )
}
export {FavoriteNavbar}