import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { baseUrl } from '../shared/baseUrl';
import Loading from './Loading';

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
            <Animatable.View animation='fadeInRightBig' duration={2000}>
                <ListItem 
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    chevron={true}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                    onPress={()=>this.props.navigation.navigate('DishDetail', {dishId: item.id})}
                    />
            </Animatable.View>
        )
    };

    render(){
        const dishList = this.props.dishes;
        if (dishList.isLoading) {
            return <Loading />
        }
        else if (dishList.errMsg) {
            return(
                <View>
                    <Text>{dishList.errMsg}</Text>
                </View>
            )
        } 
        else {
            return(
                <View>
                    <FlatList 
                        data={dishList.dishes}
                        renderItem={this.renderMenuItem}
                        keyExtractor={item => item.id.toString()}
                        />
                </View>
            )
        }
    }
}

export default connect(mapStateToProps)(Menu);