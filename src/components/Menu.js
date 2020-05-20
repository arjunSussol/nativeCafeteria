import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
    }
}

class Menu extends Component {
    constructor(props) {
        super(props);
    };

    renderMenuItem = ({item, index}) => {
        return(
            <ListItem 
                key={index}
                title={item.name}
                subtitle={item.description}
                chevron={true}
                leftAvatar={{source: {uri: baseUrl + item.image}}}
                onPress={()=>this.props.navigation.navigate('DishDetail', {dishId: item.id})}
                />
        )
    };

    render(){
        return(
            <View>
                <FlatList 
                    data={this.props.dishes.dishes}
                    renderItem={this.renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                    />
            </View>
        )
    }
}

export default connect(mapStateToProps)(Menu);