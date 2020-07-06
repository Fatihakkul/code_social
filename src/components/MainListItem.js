import React,{useState,useEffect} from 'react'
import {View,TouchableOpacity,Text,Image} from 'react-native'
import styles from '../styles'
import SplashScreen from 'react-native-splash-screen';

const MainListItem =props=>{

     const [number, setNumber]=useState(1)
     const [open , setClose]=useState(Boolean)
    //const userName = props.name.substring(0 , props.name.lastIndexOf('@'))
    function readMore (){
        if(open == true){
            setNumber(1)
            setClose(false)
        }else {
            setNumber(5)
            setClose(true)
        }
    }
    return(
        <View style={styles.components.MainListItem.container}>
            <View style={styles.components.MainListItem.userContainer}>
                <View style={styles.components.MainListItem.userName}>

                     
                    <Image style={{width : 24,height : 24}} source={require('../assets/rocket.png')}/>
                    <Text  style={styles.components.MainListItem.nameText}>{props.userName}</Text>
                    
                </View>
                <Text style={{color : 'white'}}>{props.time}</Text>
            </View>
            <View>
                 
                <Image style={{resizeMode : 'contain',alignSelf : 'center'}} source={require('../assets/rocket.png')}/>
                 <View>
                    <Text numberOfLines={number} onPress={()=>readMore()} style={styles.components.MainListItem.post}>{/*props.post*/}fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</Text>
                </View>
                <View style={styles.components.MainListItem.postContainer} >
                
                    <TouchableOpacity>
                        <Image style={{width : 24 , height : 24, marginRight : 10}} source={require('../assets/star.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.components.MainListItem.addFavoritebutton} onPress={props.onPress}>
                        <Image style={{width : 24,height : 27}} source={require('../assets/add.png')}/>
                    </TouchableOpacity>
                 
                </View>
            </View>
        </View>
    )
}
export {MainListItem}