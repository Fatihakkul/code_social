import React,{useState,useEffect} from 'react'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
import {SafeAreaView,View,Text, FlatList} from 'react-native'
import {PostInput,MainListItem} from '../components'
import styles from '../styles'

const MainPage =props=>{

    const user= auth().currentUser

    const [list,setList]=useState([])
    const [text,setText]=useState("")
    const [dataList,setDataList]=useState([])

    useEffect(() => {
        database()
            .ref(`/users/`)
            .once('value')
            .then(response =>{
                if(response.val() != null){
                    let responseList = Object.values(response.val());
                    setDataList(responseList)
                    console.log(dataList)
                }
            })
    }, [])
    
    const sendData =()=>{
        let newList=[...list]
        newList.push(text , user.uid)
        setList(newList)

        database().ref(`/${user.uid}/`)
        .push();
      
    }

    const renderPost =({item})=>{
        return (
            <MainListItem 
                onPress={()=>console.log('button')}
                post={item}
                time={5}
                name="Fatih"
            />
        )
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.pages.MainPage.container}> 
                <FlatList 
                    keyExtractor={(item,index)=>index.toString()}
                    data={list}
                    renderItem={renderPost}
                />
               <PostInput onChangeText={(text)=>setText(text)} onPress={sendData}/>
              
            </View>
        </SafeAreaView>
    )
}
export {MainPage}