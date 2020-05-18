import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import Menu from './Menu';
import DishDetail from './DishDetail';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CustomDrawerContent from './DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = ({ navigation }) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{title: 'Home',
                headerLeft: () => <Icon name='menu' color='white' onPress={() => navigation.toggleDrawer()} />,
                headerStyle: {
                    backgroundColor: '#512DA8',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />   
        </Stack.Navigator>
    )
}

const AboutStackNavigator = ({ navigation }) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='About' component={About} options={{title: 'About Us',
                headerLeft: () => <Icon name='menu' color='white' onPress={() => navigation.toggleDrawer()} />,
                headerStyle: {
                    backgroundColor: '#512DA8',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} 
        />   
        </Stack.Navigator>
    )
}

const ContactStackNavigator = ({ navigation }) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Contact' component={Contact} options={{title: 'Contact Us',
                headerLeft: () => <Icon name='menu' color='white' onPress={() => navigation.toggleDrawer()} />,
                headerStyle: {
                    backgroundColor: '#512DA8',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} 
        />   
        </Stack.Navigator>
    )
}

const MenuStackNavigator = ({ navigation }) => {
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
            <Stack.Screen name='Menu' component={Menu} options={{title: 'Menu',
                headerLeft: () => <Icon name='menu' color='white' onPress={() => navigation.toggleDrawer()} />}} />
            <Stack.Screen name='DishDetail' component={DishDetail} options={{title: 'Dish Details'}} />
        </Stack.Navigator>
    )
}
class Main extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Drawer.Navigator initialRouteName='Home' 
                    drawerContent={props => <CustomDrawerContent {...props} />}
                    drawerStyle={{
                        backgroundColor: '#D1C4E9'
                }}>
                    <Drawer.Screen name='Home' component={HomeStackNavigator} />
                    <Drawer.Screen name='About' component={AboutStackNavigator} />
                    <Drawer.Screen name='Menu' component={MenuStackNavigator} />
                    <Drawer.Screen name='Contact' component={ContactStackNavigator} />
                </Drawer.Navigator>
            </View>
        )
    }
}

export default Main;