import React, { Component } from 'react';
import { Text ,Button,View} from 'react-native';

export default class DetailComponent
    extends Component {
        //返回到列表页面
        back=()=>{
            //goback
            this.props.navigation.goBack();
            //navigate
            //this.props.navigation.navigate('myList');
        }

        componentDidMount(){
            //接收参数
            console.log(this.props.navigation);
        }

        render(){
            return <View>
                        <Text>这是详情页面</Text> 
                        <Text>{this.props.navigation.state.params.msg}</Text>
                        <Button 
                        onPress={this.back}
                        title="返回"></Button>
                </View>
        }
}