import React,{useState,useEffect,useContext} from 'react'
import database from '@react-native-firebase/database';
import Context from '../context/store'
import auth from '@react-native-firebase/auth'
import {SafeAreaView,View, FlatList} from 'react-native'
import {PostInput,MainListItem} from '../components'
import Moment from 'moment'
import 'moment/locale/tr'

import styles from '../styles'


const MainPage =props=>{
    
    const time=Moment().year('year').month('month').date('days')._d.toString();
    const user= auth().currentUser
    const email = user.email

    const {state , dispatch} = useContext(Context)
    const [text,setText]=useState("")
    const [users, setUsers]=useState([])
    
    
    
     
    useEffect(() => {
      getData();
      
     
    }, [])

  const getData=()=>{
            database()
            .ref('/posts/')
            .once('value')
            .then(res=>{
                if(res != null){
                    let resList = Object.values(res.val());
                    setUsers(resList)
                   
                }
            })
            
        }
    
    
    const sendData =()=>{
        database()
        .ref('/posts/')
        .push({
            email : email,
            text : text,
            time : time
        })
        getData();
    }

    function addFavorite (i) {
       
        let newlist=[...users]
        dispatch({type : "SET_ITEM" , post : newlist[i] })
    }

    const renderPost =({item,index})=>{
        
        return (
            <MainListItem 
               
                post={item.text}
                time={Moment(item.time).fromNow().toString()}
                name={item.email}
                onPress={()=>addFavorite(index)}
                
            />
        )
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.pages.MainPage.container}> 
                <FlatList 
                    keyExtractor={(item,index)=>index.toString()}
                    data={users}
                    renderItem={renderPost}
                />
               <PostInput onChangeText={(text)=>setText(text)} onPress={sendData}/>
              
            </View>
        </SafeAreaView>
    )
}
export {MainPage}