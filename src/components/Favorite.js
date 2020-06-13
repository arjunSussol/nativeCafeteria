import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';

import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';
import { deleteFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
})

class Favorite extends Component {

    render(){
        const { navigate } = this.props.navigation;
        const { dishes, favorites, deleteFavorite } = this.props;

        const closeRow = (rowMap, rowKey) => {
            if (rowMap[rowKey]) {
                rowMap[rowKey].closeRow();
            }
        };

        const deleteRow = (rowMap, rowKey) => {
            closeRow(rowMap, rowKey);
            deleteFavorite(rowKey);
        };

        const renderMenuItem = ({item, index}) => {
            return(                
                <TouchableHighlight>
                    <ListItem 
                        key={index}
                        title={item.name}
                        subtitle={item.description}
                        chevron={true}
                        leftAvatar={{source: {uri: baseUrl + item.image}}}
                        onPress={()=>navigate('DishDetail', {dishId: item.id})}
                    />
                </TouchableHighlight>
            )
        };

        const renderHiddenItem = (data, rowMap) => (
            <View style={styles.rowBack}>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnLeft]}
                    onPress={() => closeRow(rowMap, data.item.id)}
                >
                    <Text style={styles.backTextWhite}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={() => deleteRow(rowMap, data.item.id)}
                >
                    <Text style={styles.backTextWhite}>Delete</Text>
                </TouchableOpacity>
            </View>
        );

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
                <View style={styles.container}>
                    <SwipeListView 
                        data={dishes.dishes.filter(dish => favorites.some(el => el === dish.id))}
                        renderItem={renderMenuItem}
                        renderHiddenItem={renderHiddenItem}
                        keyExtractor={item => item.id.toString()}
                        rightOpenValue={-150}
                        previewRowKey={'0'}
                        previewOpenValue={-40}
                        previewOpenDelay={3000}
                        />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);