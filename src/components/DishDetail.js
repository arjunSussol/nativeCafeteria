import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import { DISHES } from '../shared/dishes';

const RenderDish = props => {
    const dish = props.dish;
    if (dish != null) {
        return(
            <Card 
                featuredTitle={dish.name}
                image={require('../assets/images/uthappizza.png')} 
            >
                <Text style={{margin: 10}}>{dish.description}</Text>
            </Card>
        )
    } else {
        return <View></View>
    }
}
const DishDetail = ({ route }) => {
        const [dishes, setDishes] = useState(DISHES); // Hooks
        const { dishId } = route.params;
        const dishID = JSON.stringify(dishId);
        return(
            <RenderDish dish={dishes[dishID]}/>
        )
}

export default DishDetail;