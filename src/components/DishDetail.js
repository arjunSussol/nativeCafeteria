import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

// Recoil atom
const dishListState = atom({
    key: 'dishList',
    default: DISHES
});

const commentListState = atom({
    key: 'commentList',
    default: COMMENTS
});

const setFavoriteDish = atom({
    key: 'favoriteDish',
    default: []
});

const RenderDish = props => {
    const dish = props.dish;
    if (dish != null) {
        return(
            <Card 
                featuredTitle={dish.name}
                image={require('../assets/images/uthappizza.png')} 
            >
                <Text style={{margin: 10}}>{dish.description}</Text>
                <Icon 
                    raised
                    reverse
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already marked') : props.onPress()}/>
            </Card>
        )
    } else {
        return <View></View>
    }
}

const RenderComments = props => {
    const commentList = props.comment;

    const renderCommentList = ({ item, index }) => {
        return(
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        )
    };

    return(
        <Card title='Comments' style={{flex: 1, marginBottom: 25}}>
            <FlatList
                data={commentList}
                renderItem={renderCommentList}
                keyExtractor={item => item.id.toString()} 
            />
        </Card>
    )
}

const DishDetail = ({ route }) => {
        const dishes = useRecoilValue(dishListState); // Recoil
        const comments = useRecoilValue(commentListState); // Recoil
        const [favorites, setFavorites] = useRecoilState(setFavoriteDish); // Recoil

        const markFavorite = favDish => {
            setFavorites(favorites => favorites.concat(favDish));
        }

        const { dishId } = route.params;
        const dishID = JSON.stringify(dishId);
        return(
            <View>
                <RenderDish dish={dishes[dishID]} favorite={favorites.some(el => el === dishId)} 
                    onPress={() => markFavorite(dishId)} />
                <RenderComments comment={comments.filter(comment => comment.dishId === dishId)} />
            </View>
        )
}

export default DishDetail;