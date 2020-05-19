import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

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
        <Card title='Comments'>
            <FlatList
                data={commentList}
                renderItem={renderCommentList}
                keyExtractor={item => item.id.toString()} 
            />
        </Card>
    )
}

const DishDetail = ({ route }) => {
        const [dishes, setDishes] = useState(DISHES); // Hooks
        const [comments, setComments] = useState(COMMENTS); // Hooks

        const { dishId } = route.params;
        const dishID = JSON.stringify(dishId);
        return(
            <View>
            <RenderDish dish={dishes[dishID]} />
            <RenderComments comment={comments.filter(comment => comment.dishId === dishId)} />
            </View>
        )
}

export default DishDetail;