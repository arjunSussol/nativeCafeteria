import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: dishId => dispatch(postFavorite(dishId))
});

const RenderDish = props => {
    const dish = props.dish;
    if (dish != null) {
        return(
            <Card 
                featuredTitle={dish.name}
                image={{uri: baseUrl + dish.image}} 
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

const DishDetail = props => {
        const markFavorite = dishId => {
            props.postFavorite(dishId);
        }

        const { dishId } = props.route.params;
        const dishID = JSON.stringify(dishId);
        return(
            <View>
                <RenderDish dish={props.dishes.dishes[dishID]} favorite={props.favorites.some(el => el === dishId)} 
                    onPress={() => markFavorite(dishId)} />
                <RenderComments comment={props.comments.comments.filter(comment => comment.dishId === dishId)} />
            </View>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);