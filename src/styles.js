import {StyleSheet,Dimensions} from 'react-native'

const styles= {
    components : {
        ınput : StyleSheet.create({
            container : {
                backgroundColor : 'white',
                borderRadius : 10,
                margin : 15
            },
            text : {
                fontSize : 18,
                marginLeft: 15
            }
        }),
        myButton : StyleSheet.create({
            container : {
                backgroundColor : 'white',

                borderRadius : 10,
                marginTop : 15,
                padding : 10,
                alignItems : 'center',
                width : Dimensions.get('window').width * 0.7
            },
            text : {
                color : '#ffa000',
                fontSize: 17
            
            }
        })
    },
    assets : {
        rocket : StyleSheet.create({
            Image : {
                height: Dimensions.get('window').height * 1/3,
                width : Dimensions.get('window').width * 1/3,
                resizeMode : 'contain',
                alignSelf : 'center'
               
            }
        })
    },
    pages : {
        RegisterPage : StyleSheet.create({
            container : {
                flex: 1,
                justifyContent: 'center',
                backgroundColor: "#80cbc4"
            }
        }),
        LoginPage : StyleSheet.create({
           container : {
                flex: 1,
                justifyContent: 'center',
                backgroundColor: "#ffa000"
            }
        })
    }
}
export default styles