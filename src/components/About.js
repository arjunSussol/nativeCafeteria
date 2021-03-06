import React, { Component } from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { baseUrl } from '../shared/baseUrl';
import Loading from './Loading';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

const History = () => {
    return(
        <Card title='Our History'>
            <Text style={{margin: 10}}>
                {`Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.`}
            </Text>
        </Card>
    )
}

class About extends Component {
    constructor(props){
        super(props);
    };

    renderLeadership = ({ item, index }) => {
        return(
            <ListItem 
                key={index} 
                title={item.name}
                subtitle={item.description}
                leftAvatar={{source: {uri: baseUrl + item.image}}}
                chevron
            />
        )
    }

    render() {
        if (this.props.leaders.isLoading) {
            return(
                <SafeAreaView>
                    <History />
                    <Card title="Corporate Leadership">
                        <Loading />
                    </Card>                 
                </SafeAreaView>
            )
        } 
        else if (this.props.leaders.errMsg) {
            return(
                <SafeAreaView>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <History />
                        <Card title="Corporate Leadership">
                            <Text>{this.props.leaders.errMsg}</Text>
                        </Card>
                    </Animatable.View>                
                </SafeAreaView>
            )
        } 
        else {
            return(
                <SafeAreaView>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <History />
                        <Card title="Corporate Leadership">
                            <FlatList 
                                data={this.props.leaders.leaders}
                                renderItem={this.renderLeadership}
                                keyExtractor={item => item.id.toString()}
                            />  
                        </Card> 
                    </Animatable.View>                 
                </SafeAreaView>
            )
        }        
    }
}

export default connect(mapStateToProps)(About);