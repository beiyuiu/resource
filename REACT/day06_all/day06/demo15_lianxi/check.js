import React, { Component } from 'react';
import {
    TouchableOpacity,
    ActivityIndicator,
    View,
    Text
}
    from 'react-native';

export default class CheckComponent
    extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    jumpToPay = () => {
        console.log('jumpToPay func is called');

        //启动一个周期性定时器
        timer = setInterval(() => {
            var nowCount = this.state.count;
            nowCount++;
            console.log(nowCount);
            if (nowCount > 3) {
                //跳转到支付页面
                // this.props.navigation
                //     .navigate(
                //     'myPay',
                //     { price: totalPrice }
                //     );
                clearInterval(timer);
            }
            this.setState({ count: nowCount });

        }, 1000)

        var totalPrice =
            Math.floor(Math.random() * 1500);
        console.log("随机数是" + totalPrice);

    }

    render() {
        return <View>
            <TouchableOpacity>
                <Text onPress={this.jumpToPay}>
                    去支付
                </Text>
            </TouchableOpacity>
            {
                this.state.count < 3
                &&
                <View style={{ alignItems: 'center' }}>
                    <ActivityIndicator>
                    </ActivityIndicator>
                    <Text style={{ color: '#ff0000' }}>
                        loading...
                </Text>
                </View>
            }
        </View>
    }
}