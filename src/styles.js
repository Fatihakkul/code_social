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
        }),
        PostInput : StyleSheet.create({
            container : {
                backgroundColor : '#ffa000',
                flexDirection : 'row',
                width : Dimensions.get('window').width * 0.9,
                alignItems : 'center',
                alignSelf: 'center',
                justifyContent : 'space-between',
                borderRadius : 12,
                paddingHorizontal : 10
            },
            text :{
                fontSize : 18,
                width : Dimensions.get('window').width * 0.8,
                color : 'white'
                
            }
        }),
        MainListItem : StyleSheet.create({
            container : {
               marginVertical : 15
            },
            postContainer : {
                flexDirection : 'row',
                justifyContent : 'flex-end',
                alignItems : 'center',
                paddingBottom : 2,
                borderBottomWidth : 0.5,
                borderColor : 'black'
               
                
                
            },
            post : {
                fontSize : 18,
                marginLeft : 5,
                marginTop : 5,
                width : Dimensions.get('window').width * 0.8
            },
            addFavoritebutton : {
                alignSelf : 'flex-end',
                paddingRight : 5
            },
            userName : {
                
                flexDirection : 'row',
                paddingLeft: 5
            },
            nameText :{
                fontSize : 18,
                color : 'white',
                marginLeft : 5
            },
            userContainer : {
                backgroundColor : '#ffa000',
                flexDirection: 'row',
                alignItems :'center',
                justifyContent : 'space-between',
                padding : 5
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
        }),
        MainPage : StyleSheet.create({
            container : {  
                flex: 1,
               
                flexDirection : 'column',
                marginBottom : 15
            }
        })
    }
}
export default styles