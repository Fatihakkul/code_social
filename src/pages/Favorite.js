import React,{useContext,useEffect} from 'react'
import Context from '../context/store'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage';
import {SafeAreaView,View,Text,FlatList,Dimensions} from 'react-native'
import moment from 'moment'
import {MainListItem,FavoriteNavbar} from '../components'

const Favorite =props=>{
    const { state , dispatch } = useContext(Context)
  
    const logOut =()=>{
           auth().signOut();
           AsyncStorage.removeItem('@USER_ID')
           props.navigation.navigate('LoginPage')
           
        
    }
    const renderFavorite =({item})=>{
            return(
            <MainListItem 
              post={item.text}
              time={moment(item.time).fromNow().toString()}
              name={item.email}/>
              )
            }
    return(
        <SafeAreaView >
            <View >
                <View>
                    <FavoriteNavbar 
                        onPress={logOut}
                    />
                </View>
                <View>
                    <FlatList 
                    keyExtractor={(_,index)=>index.toString()}
                    data={state.posts}
                    renderItem={renderFavorite}

                    />
              </View>
            </View>
        </SafeAreaView>
    )
}
export {Favorite}