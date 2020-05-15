import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

const RenderItem = ({ item }) => {
    if (item != null) {
        return(
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={require('../assets/images/alberto.png')}>
                <Text style={{margin: 10, textAlign: "justify"}}>{item.description}</Text>
            </Card>
        )
    } else {
        return <View></View>
    }
}

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS
        }
    }

    render(){
        return(
                <ScrollView>
                    <RenderItem item={this.state.dishes.filter(dish => dish.featured)[0]} />
                    <RenderItem item={this.state.leaders.filter(leader => leader.featured)[0]} />
                    <RenderItem item={this.state.promotions.filter(promos => promos.featured)[0]} />
                </ScrollView>
        )
    }   
}

export default Home;