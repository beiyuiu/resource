import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';

export default class ListComponent
 extends Component{

    constructor(){
        super();
        this.state = {
            myList:[100,200,300]
        }
    }
    //跳转到detail
    handlePress=(index)=>{
        console.log(this.props);
        this.props
            .navigation.navigate(
                'myDetail',
                {msg:index}
                );
    }

    //info是一个对象，有item、index属性
    showItem=(info)=>{
        return <Text 
        onPress={
            ()=>{this.handlePress(info.index)}
        }>
        {info.item}
        </Text>
    }

    render(){
        return <FlatList 
        renderItem={this.showItem}
        data={this.state.myList}>

        </FlatList>
    }

}

