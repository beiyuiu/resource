import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';

export default class Demo08Component
    extends Component {

    constructor() {
        super();
        this.state = {
            myList:[100,200,300]
        }
    }
    //通过箭头函数定义一个叫做showItems的方法
    //在该方法中去渲染列表项
    //renderItem属性所对应的方法是有参数的，
    //参数是一个对象，包含item
    //（data属性对应集合中的元素内容）、index(下标)
    showItems=(info)=>{
        console.log(info);
        return <Text 
    onPress={()=>this.handlePress(info.index)} >{info.item}</Text>
    }
    //给列表项指定一个点按事件的处理函数
    handlePress(index){
        alert('第'+index+'个 item 被点击了');
    }

    render() {
        return <View style={{height:150}}>
        <FlatList
        data={this.state.myList}
        renderItem={this.showItems}
        >
        </FlatList>
        </View>
    }
}