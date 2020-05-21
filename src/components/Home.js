import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

import { baseUrl } from '../shared/baseUrl';
import Loading from './Loading';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions
    }
}

const RenderItem = ({ item, isLoading, errMsg }) => {
    if (isLoading) {
        return <Loading />
    } 
    else if (errMsg) {
        return(
            <View>
                <Text>{errMsg}</Text>
            </View>
        )
    }
    else {
        if (item != null) {
            return(
                <Card
                    featuredTitle={item.name}
                    featuredSubtitle={item.designation}
                    image={{uri: baseUrl + item.image}}>
                    <Text style={{margin: 10, textAlign: "justify"}}>{item.description}</Text>
                </Card>
            )
        } else {
            return <View></View>
        } 
    }
}

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ScrollView>
                <RenderItem item={this.props.dishes.dishes.filter(dish => dish.featured)[0]} 
                    isLoading={this.props.dishes.isLoading}
                    errMsg={this.props.dishes.errMsg}
                    />
                <RenderItem item={this.props.leaders.leaders.filter(leader => leader.featured)[0]} 
                    isLoading={this.props.dishes.isLoading}
                    errMsg={this.props.dishes.errMsg}
                    />
                <RenderItem item={this.props.promotions.promotions.filter(promos => promos.featured)[0]}  
                    isLoading={this.props.dishes.isLoading}
                    errMsg={this.props.dishes.errMsg}
                    />
            </ScrollView>
        )
    }   
}

export default connect(mapStateToProps)(Home);