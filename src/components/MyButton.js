import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import styles from '../styles'

const MyButton =props=>{
    return(
        <TouchableOpacity style={styles.components.myButton.container} onPress={props.onPress}>
            <Text style={styles.components.myButton.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export {MyButton}