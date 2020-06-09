import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      favorites: state.favorites
    }
}

class Favorite extends Component {

    render(){
        const { navigate } = this.props.navigation;
        const { dishes, favorites } = this.props;

        const renderMenuItem = ({item, index}) => {
            return(
                <ListItem 
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    chevron={true}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                    onPress={()=>navigate('DishDetail', {dishId: item.id})}
                    />
            )
        };

        if (dishes.isLoading) {
            return <Loading />
        }
        else if (dishes.errMsg) {
            return(
                <View>
                    <Text>{dishes.errMsg}</Text>
                </View>
            )
        } 
        else {
            return(
                <View>
                    <FlatList 
                        data={dishes.dishes.filter(dish => favorites.some(el => el === dish.id))}
                        renderItem={renderMenuItem}
                        keyExtractor={item => item.id.toString()}
                        />
                </View>
            )
        }
    }
}

export default connect(mapStateToProps)(Favorite);