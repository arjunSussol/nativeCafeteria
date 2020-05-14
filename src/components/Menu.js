import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

import { DISHES } from '../shared/dishes';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    };

    renderMenuItem = ({item, index}) => {
        return(
            <ListItem 
                key={index}
                title={item.name}
                subtitle={item.description}
                chevron={true}
                leftAvatar={{source: require('../assets/images/uthappizza.png')}}
                onPress={()=>this.props.navigation.navigate('DishDetail', {dishId: item.id})}
                />
        )
    };

    render(){
        return(
            <View>
                <FlatList 
                    data={this.state.dishes}
                    renderItem={this.renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                    />
            </View>
        )
    }
}

export default Menu;