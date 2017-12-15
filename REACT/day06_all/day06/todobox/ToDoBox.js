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

    //从状态list中删除指定位置的元素
    deleteFromList=(index)=>{
        var nowList = this.state.list;
        nowList.splice(index,1);
        console.log(nowList);
        this.setState({list:nowList});
    }

    render(){
        return <View>
            <ToDoInputComponent 
            funcAdd={this.addToList}></ToDoInputComponent>
            <ToDoListComponent
            funcDel={this.deleteFromList}
            myList={this.state.list}
            ></ToDoListComponent>
        </View>
    }
}