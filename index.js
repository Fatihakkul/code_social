/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {PostInput,MainListItem,FavoriteNavbar} from './src/components'
import Rotuer from './src/Rotuer'
import {RegisterPage,LoginPage,MainPage} from './src/pages'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Rotuer);
