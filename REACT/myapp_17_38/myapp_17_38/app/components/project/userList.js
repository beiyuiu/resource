import React, { Component } from 'react';
import { FlatList, View, Image, Text } from 'react-native'

export default class UserListComponent
    extends Component {
    constructor() {
        super();
        this.state = {
            myList: [1, 2, 3]
        }
    }

    componentWillMount(){
        fetch('http://172.163.100.62/ajia_code/data/user/user_list.php')
        .then((response)=>response.json())
        .then((response)=>{
            //给列表中的每一个对象指定一个key属性
            var nowList = response.data;
            for(var i=0;i<nowList.length;i++){
                nowList[i].key = i;
            }
            console.log(nowList);
            //将response中的data对应的数组保存在状态
            this.setState({myList:nowList});            
        })
    }

    showItem = (info) => {
        return <View style={{
            height: 80,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{uri:'http://172.163.100.62/ajia_code/'+info.item.avatar}} />
            <View style={{ flexDirection: 'column' }}>
                <Text>{info.item.email}</Text>
                <Text>{info.item.user_name}</Text>
            </View>

        </View>
    }

    render() {
        return <FlatList
            data={this.state.myList}
            renderItem={this.showItem} />
    }

}