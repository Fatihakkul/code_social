import React,{useState,useEffect,useContext} from 'react'
import database from '@react-native-firebase/database';
import Context from '../context/store'
import auth from '@react-native-firebase/auth'
import {SafeAreaView,View, FlatList, Button} from 'react-native'
import {PostInput,MainListItem} from '../components'
import Moment from 'moment'
import 'moment/locale/tr'

import styles from '../styles'

// import ImagePicker from 'react-native-image-picker';
// import {utils} from '@react-native-firebase/app';
// import storage from '@react-native-firebase/storage';

const MainPage =props=>{
    

    const time=Moment().year('year').month('month').date('days')._d.toString();
    const user= auth().currentUser
    const email = user.email

    const {state , dispatch} = useContext(Context)
    const [text,setText]=useState("")
    const [users, setUsers]=useState([])
    
    const reference = storage().ref(`${user.uid}`);

    
     
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


    // const uploadPhoto =async()=>{
    //       // path to existing file on filesystem
    //       const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}`;
    //       // uploads file
    //      await reference.putFile(pathToFile)
    // }

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
              <Button title="fotoyükle" onPress={uploadPhoto}/>
            </View>
        </SafeAreaView>
    )
}
export {MainPage}