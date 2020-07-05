import React from 'react'
import {View,TouchableOpacity,Text,Image} from 'react-native'
import styles from '../styles'

const MainListItem =props=>{
     
    const posta = props.name.substring(0 , props.name.lastIndexOf('@'))
 
    return(
        <View style={styles.components.MainListItem.container}>
            <View style={styles.components.MainListItem.userContainer}>
                <View style={styles.components.MainListItem.userName}>
                    <Image style={{width : 24,height : 24}} source={require('../assets/rocket.png')}/>
                    <Text style={styles.components.MainListItem.nameText}>{posta}</Text>
                    
                </View>
                <Text style={{color : 'white'}}>{props.time}</Text>
            </View>
            <View style={styles.components.MainListItem.postContainer} >
                <Text style={styles.components.MainListItem.post}>{props.post}</Text>
                <TouchableOpacity style={styles.components.MainListItem.addFavoritebutton} onPress={props.onPress}>
                <Image style={{width : 27,height : 27}} source={require('../assets/add.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export {MainListItem}