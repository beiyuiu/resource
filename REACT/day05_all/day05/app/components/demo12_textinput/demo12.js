import React,{Component} from 'react';
import {View,Text,TextInput} 
from 'react-native';

export default class Demo12Component 
    extends Component{
    
    //在构造函数中 初始化状态
    constructor(){
        super();
        this.state = {
            myValue:'123'
        }
    }

    handleChange(myInput){
        console.log(myInput);
    }
    //将用户所输入的值 设置为状态中的值
    modifyState=(myInput)=>{
        this.setState({myValue:myInput})
    }

    render(){
        return <View>
            <TextInput 
            onChangeText={this.handleChange}
            placeholder="plz input sth">
            </TextInput> 

            <TextInput 
            onChangeText={this.modifyState}
            value={this.state.myValue}>

            </TextInput>

        </View>
    }

}