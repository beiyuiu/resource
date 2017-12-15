import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class PayComponent
    extends Component {
    //接收参数
    //this.props.navigation.state.params.price

    render() {
        return <View>
            {
                this.props.navigation.state.params.price > 1000
                && <Text>
                    {this.props.navigation.state.params.price}
                </Text>
            }
        </View>
    }
}