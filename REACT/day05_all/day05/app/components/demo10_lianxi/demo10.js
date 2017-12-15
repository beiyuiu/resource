import React,{Component} from 'react';
import {FlatList,View,Text,TouchableOpacity} 
from 'react-native';

export default class Demo10Component 
extends Component{
    constructor(){
        super();
        this.state = {
            myList:[]
        }
    }

    componentDidMount(){
        this.setState({myList:[
            {content:1},
            {content:2},
            {content:3},
            {content:4}
        ]})
    }

    displayItem(info){
        console.log('in display item func');
        return <TouchableOpacity>
            <Text>{info.item.content}</Text>
        </TouchableOpacity>
    }

    render(){
        return <View style={{height:100}}>
        <FlatList 
        renderItem={this.displayItem}
        data={this.state.myList}>

        </FlatList> 
        </View>
    }

}