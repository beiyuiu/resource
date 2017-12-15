import React,{Component} from 'react';
import {Text,View,Button,TextInput}
 from 'react-native';

export default class ToDoInputComponent 
extends Component{

    constructor(){
        super();
        this.state = {myInput:''};
    }

    handlePress=()=>{
        this.props.funcAdd(this.state.myInput);
    }

    handleChange=(userInput)=>{
        this.setState({myInput:userInput});
    }

    render(){
        return <View>
                <Text>待做事项列表</Text>
                <TextInput 
                onChangeText={this.handleChange} />
                <Button 
                onPress={this.handlePress} title="add"></Button>
            </View>
    }

}
