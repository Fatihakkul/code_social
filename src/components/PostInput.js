import React from 'react'
import {TouchableOpacity,View,TextInput,Image} from 'react-native'
import styles from '../styles'


const PostInput=props=>{
    return(
        <View style={styles.components.PostInput.container}>
          
            <TextInput 
                style={styles.components.PostInput.text}
                multiline={true}
                onChangeText={props.onChangeText}
                placeholder="Bir şeyler yaz..."
            />
           
            <TouchableOpacity onPress={props.onPress}>
                <Image  style={{width : 28 , height : 28}} source={require('../assets/send.png')}/>
            </TouchableOpacity>
        </View>
    )
}
export {PostInput}