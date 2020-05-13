import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const Menu = props => {
    renderMenuItem = ({item, index}) => {
        return(
            <ListItem 
                key={index}
                title={item.name}
                subtitle={item.description}
                chevron={true}
                leftAvatar={{source: require('../assets/images/uthappizza.png')}}
                onPress={()=>props.onPress(item.id)}
                />
        )
    };

    return(
        <View>
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
        </View>
    )
}

export default Menu;