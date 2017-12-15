import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image }
    from 'react-native';

export default class MainComponent
    extends Component {
    
    jump = (path) => {
        this.props.navigation.navigate(path);
    }

    render() {
        return <ScrollView style={{ backgroundColor: 'powderblue', flex: 1 }}>
            {/*第一行*/}
            <View style={{ flexDirection: 'row' }}>
                {/*第一列*/}
                <View style={myStyles.myCol}>
                    <Text style={{ fontSize: 30, color: 'red' }}>200</Text>
                    <Text>今日PC端PV</Text>
                </View>
                {/*第二列*/}
                <View style={myStyles.myCol}>
                    <Text style={{ fontSize: 30, color: 'green' }}>230</Text>
                    <Text>今日移动端PV</Text>
                </View>
            </View>
            {/*第二行*/}
            <View style={{ flexDirection: 'row' }}>
                {/*第一列*/}
                <View style={myStyles.myCol}>
                    <Text style={{ fontSize: 30, color: 'red' }}>1020</Text>
                    <Text>已完成订单总数</Text>
                </View>
                {/*第二列*/}
                <View style={myStyles.myCol}>
                    <Text style={{ fontSize: 30, color: 'green' }}>2390</Text>
                    <Text>当日App下载量</Text>
                </View>
            </View>
            <Text>{'\n'}</Text>
            {/*第三行*/}
            <View style={{ flexDirection: 'row' }}>
                {/*第一列*/}
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 60, height: 60 }} source={require('../../img/order.png')} />
                    <Text>订单管理</Text>
                </TouchableOpacity>
                {/*第二列*/}
                <TouchableOpacity 
                onPress={()=>{this.jump('myUserList')}}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 60, height: 60 }} source={require('../../img/user.png')} />
                    <Text>用户管理</Text>
                </TouchableOpacity>
            </View>
            {/*第四行*/}
            <View style={{ flexDirection: 'row' }}>
                {/*第一列*/}
                <TouchableOpacity
                    onPress={()=>{this.jump('myList')}}
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 60, height: 60 }} source={require('../../img/product.png')} />
                    <Text>商品管理</Text>
                </TouchableOpacity>
                {/*第二列*/}
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 60, height: 60 }} source={require('../../img/setting.png')} />
                    <Text>设置</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    }
}

const myStyles = StyleSheet.create({
    myCol: {
        flex: 1,
        borderColor: '#e6e6e6',
        borderRightWidth: 2,
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100
    }
})