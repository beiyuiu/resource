import React,{Component} from 'react';
import {Button,Text,View} from 'react-native';

export default class Demo05Component 
    extends Component{
        constructor(){
            super();
            this.state = {
                count:0
            }
        }
        //按下按钮，状态中的数值自增操作
        handlePress=()=>{
            console.log('btn is clicked');
            var nowCount = this.state.count;
            nowCount++;
            this.setState({count:nowCount});
        }

        render(){
            return <View>
                <Text>{this.state.count}</Text>
                <Button 
                onPress={this.handlePress} 
                title="clickMe"></Button>
            </View>
        }
    }