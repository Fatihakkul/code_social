import React,{useState} from 'react'
import auth from '@react-native-firebase/auth'
import {SafeAreaView,View,Text,ScrollView,Image} from 'react-native'
import {Input,MyButton} from '../components'
import styles from '../styles'



const LoginPage =props=>{

    const [userMail,setUserMail]=useState("")
    const [userPass,setUserPass]=useState("")

    const LoginMail =(text)=> setUserMail(text)
    const LoginPass =(text)=> setUserPass(text)

    const loginApp =()=>{
        if(userMail.length != 0 && userPass.length != 0){
            auth()
                .signInWithEmailAndPassword(userMail,userPass)
                .then(()=>{
                    props.navigation.navigate("Main")
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
    
    function saveUser(){
        props.navigation.navigate("RegisterPage")
    }
    
    return(
        <SafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1,backgroundColor : '#ffa000'}} bounces={false}>
             <View style={{ flex:1}}>
                 <View style={{flex:1}}>
                     <Image style={styles.assets.rocket.Image} source={require('../assets/rocket.png')}/>
                 </View>
                 <View style={{flex:1}}>
                     <Input 
                     holder="E-mailinizi giriniz..."
                     Type='email-address'
                     secure={false}
                     onChangeText={LoginMail}
                     multiline={true}
                     />
                     <Input 
                     holder="Şifrenizi giriniz..."
                     secure={true}
                     onChangeText={LoginPass}
                 
                     />
                   
                 </View>
                 <View style={{flex:1,alignItems : 'center'}}>
                     <MyButton title="Giriş Yap"  onPress={loginApp} />
                     <MyButton title="Kayıt Ol"  onPress={saveUser}/>
                    
                 </View>
             </View>
        </ScrollView>
     </SafeAreaView>
    )
}
export {LoginPage}