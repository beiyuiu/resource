import React,{Component} from 'react';
import {Image,View} from 'react-native';

export default class Demo07Component
 extends Component{

    constructor(){
        super();
        this.state = {
            imgUrl:'1.jpg'
        }
    }

    // <Imagesource={require('../../img/'+this.state.imgUrl)}>
    //         </Image>
    render(){
        return <View>
        
            <Image 
            style={{width:20,height:20}}
    source={require('../../img/1.jpg')}></Image>
            <Image
            style={{width:50,height:50}}
            source={{
                uri:
'http://172.163.100.58/ajia_code/img/'
+this.state.imgUrl}}>
            </Image>
        </View>
    }

}