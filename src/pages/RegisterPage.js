import React,{useState} from 'react'
import {SafeAreaView,View,Image,ScrollView, Alert} from 'react-native'
import auth from '@react-native-firebase/auth'
import {MyButton,Input} from '../components'
import styles from '../styles'



const RegisterPage =props=>{
    const [userMail,setUserMail]=useState("")
    const [userPass,setUserPass]=useState("")
    const [userPassRep,setUserPassRep]=useState("")

    const saveMail =(text)=> setUserMail(text)
    const savePass =(text)=> setUserPass(text)
    const savePassRep =(text)=> setUserPassRep(text)

    const saveUser =()=>{
        if(userPass.length != 0 && userPassRep.length != 0 && userMail != 0 ){
            if(userPass==userPassRep){
                auth()
                    .createUserWithEmailAndPassword(userMail,userPass)
                    .then(()=>{
                    Alert.alert('Hesabınız oluşturulmuştur')
                    })
                    .catch((err)=>{
                        if (err.code === 'auth/email-already-in-use') {
                            Alert.alert('Bu e-mail daha önce kullanıldı');
                        }
                    
                        if (err.code === 'auth/invalid-email') {
                            Alert.alert('Geçersiz e-mail!');
                        }else Alert.alert('Bir hata oluştu.Lütfe daha sonra deneyiniz')
                    
                        
                    })
            }else Alert.alert('Şifreleriniz uyuşmamaktadır!')
        }else Alert.alert('Lütfen alanları doldurunuz!')
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
                        onChangeText={saveMail}
                        multiline={true}
                        />
                        <Input 
                        holder="Şifrenizi giriniz..."
                        secure={true}
                        onChangeText={savePass}
                    
                        />
                        <Input 
                        holder="Şifrenizi tekrar giriniz..."
                        secure={true}
                    
                        onChangeText={savePassRep}
                        />
                    </View>
                    <View style={{flex:1,alignItems : 'center'}}>
                        <MyButton title="Kayıt Ol" onPress={saveUser} />
                        <MyButton  title="Vazgeç"  />
                    </View>
                </View>
           </ScrollView>
        </SafeAreaView>
    )
}
export {RegisterPage}