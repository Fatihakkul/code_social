import React from 'react'
import {View,TextInput} from 'react-native'
import styles from '../styles'

const Input =props=>{
    return(
        <View style={styles.components.ınput.container}>
            <TextInput 
                style={styles.components.ınput.text}
                placeholder={props.holder}
                onChangeText={props.onChangeText}
                keyboardType={props.Type}
                secureTextEntry={props.secure}
                multiline={props.multiline}        
                    
            />
        </View>
    )
}
export {Input}