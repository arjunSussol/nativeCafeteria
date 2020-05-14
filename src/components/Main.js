import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Menu';
import DishDetail from './DishDetail';

const Stack = createStackNavigator();

class Main extends Component {
    render() {
        return(
            <Stack.Navigator initialRouteName='Menu'>
                <Stack.Screen name='Menu' component={Menu} options={{title: 'Menu'}} />
                <Stack.Screen name='DishDetail' component={DishDetail} options={{title: 'Dish Details'}} />
            </Stack.Navigator>
        )
    }
}

export default Main;