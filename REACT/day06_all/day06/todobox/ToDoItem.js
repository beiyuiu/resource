import React,{Component} from 'react';
import {Text,View,Button}
 from 'react-native';

export default class ToDoItemComponent 
extends Component{
    //定义一个删除按钮 按下的处理函数
    handlePress=()=>{
        //从ToDoBox组件中 删除 当前位置 所对应的元素
        this.props.funcRemove(this.props.myIndex);
    }
    render(){
        return <View>
                <Text>{this.props.myContent}</Text>
                <Button onPress={this.handlePress}
                 title="delete"></Button>
            </View>
    }

}
