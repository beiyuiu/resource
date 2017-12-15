import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';


export default class Demo11Component 
    extends Component{
        loadList(){
            //向服务器端 获取数据
            fetch('http://172.163.100.58/ajia_code/data/user/logout.php')
            .then(
                (response)=>{
                    return response.json()
                }
            )
            .then(
                (response)=>{
                console.log(response);
            })
        }
        render(){
            return <View>
                <Text>hello</Text>
                <Button 
                onPress={this.loadList} 
                title="loadData"></Button>
            </View>
        }
        
}
