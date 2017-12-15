import React,{Component} from 'react';
import {FlatList,Text} from 'react-native';
import ToDoItemComponent from './ToDoItem'

export default class ToDoListComponent 
extends Component{

    constructor(){
        super();
        this.state = {
            myList:[]
        }
    }
    //什么时候 去接收父组件传递来的数组？
    componentDidMount(){
        this.setState(
            {
                myList:this.props.myList
            });
    }

    componentWillReceiveProps(){
    
        console.log('componentWillReceiveProps');
        this.setState(
            {
                myList:this.props.myList
            });
    }

    showItem=(info)=>{
        return <ToDoItemComponent 
        funcRemove={this.props.funcDel}
        myIndex={info.index}
        myContent={info.item}/>    
    }


    render(){
        return <FlatList
        extraData={this.state}
        renderItem={this.showItem} 
        data={this.state.myList}/>
    }

}
