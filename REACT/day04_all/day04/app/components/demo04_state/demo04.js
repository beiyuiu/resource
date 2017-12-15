import React,{Component} from 'react';
import {Text} from 'react-native';

export default class Demo04Component
    extends Component{
        //构造函数，在类被调用时 将自动的触发
        constructor(){
            super();
            //在构造函数中，完成状态的初始化
            this.state = {
                count:100
            }
        }

        componentDidMount(){
            console.log('组件挂载完毕');
            //每隔1s，修改状态中的值
            setInterval(()=>{
                var nowCount = this.state.count;
                nowCount++;
                this.setState(
                        {count:nowCount},
                        function(){
                            console.log(this.state.count);
                        }
                    );
            },1000)
        }

        //在状态中的count为0时，
        //在text显示'计数器未启动'
        //否则 显示count对应的值
        render(){
            return <Text>
                {
                    this.state.count==0?'计数器未启动':this.state.count
                }
            </Text>
        }

        
    }