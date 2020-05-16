import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';

import Menu from './Menu';
import DishDetail from './DishDetail';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{title: 'Home'}} />   
        </Stack.Navigator>
    )
}

const AboutStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='About' component={About} options={{title: 'About Us'}} />   
        </Stack.Navigator>
    )
}

const ContactStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Contact' component={Contact} options={{title: 'Contact Us'}} />   
        </Stack.Navigator>
    )
}

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
            <View style={{flex: 1}}>
                <Drawer.Navigator initialRouteName='Home'>
                    <Drawer.Screen name='Home' component={HomeStackNavigator} options={{drawerLabel: 'Home'}} />
                    <Drawer.Screen name='About' component={AboutStackNavigator} options={{drawerLabel: 'About Us'}} />
                    <Drawer.Screen name='Menu' component={MenuStackNavigator} options={{drawerLabel: 'Menu'}} />
                    <Drawer.Screen name='Contact' component={ContactStackNavigator} options={{drawerLabel: 'Contact Us'}} />
                </Drawer.Navigator>
            </View>
        )
    }
}

export default Main;