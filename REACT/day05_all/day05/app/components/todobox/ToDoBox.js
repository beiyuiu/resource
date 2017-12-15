import React,{Component} from 'react';
import {View} from 'react-native';
import ToDoInputComponent from './ToDoInput'
import ToDoListComponent from './ToDoList'

export default class ToDoBoxComponent 
extends Component{
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }

    addToList=(msg)=>{
        var nowList = this.state.list;
        nowList.push(msg);
        this.setState(
            {list:nowList},
            ()=>{
                console.log('todobox中修改后的状态的值为',this.state);
            }
            );
    }

    render(){
        return <View>
            <ToDoInputComponent 
            funcAdd={this.addToList}></ToDoInputComponent>
            <ToDoListComponent
            myList={this.state.list}
            ></ToDoListComponent>
        </View>
    }
}