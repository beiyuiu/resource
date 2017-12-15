import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Demo13Component 
extends Component{
    render(){
        return  <View>
            <View 
            style={{
                alignItems:'center',
                height:100,
                backgroundColor:'#e6e6e6'
                }}>
                
                <Text>水平居中</Text>

            </View>
             <View 
            style={{
                justifyContent:'center',
                height:100,
                backgroundColor:'#ff0000'
                }}>
                
                <Text>垂直居中</Text>

            </View>

            <View 
            style={{
                alignItems:'center',
                justifyContent:'center',
                height:100,
                backgroundColor:'#e6e6e6'
                }}>
                
                <Text>居中</Text>

            </View>

        </View>
    }
}