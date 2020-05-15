import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Platform } from 'react-native';

import Menu from './Menu';
import DishDetail from './DishDetail';
import Home from './Home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MenuStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName='Menu' screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Stack.Screen name='Menu' component={Menu} options={{title: 'Menu'}} />
            <Stack.Screen name='DishDetail' component={DishDetail} options={{title: 'Dish Details'}} />
        </Stack.Navigator>
    )
}
class Main extends Component {
    render() {
        return(
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                <Drawer.Navigator initialRouteName='Home'>
                    <Drawer.Screen name='Home' component={Home} options={{title:'Home', drawerLabel: 'Home'}} />
                    <Drawer.Screen name='MenuStackNavigator' component={MenuStackNavigator} options={{title:'Dish', drawerLabel: 'Menu'}} />
                </Drawer.Navigator>
            </View>
        )
    }
}

export default Main;