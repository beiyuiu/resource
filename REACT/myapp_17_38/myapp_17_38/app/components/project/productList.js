import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

export default class ProductListComponent
    extends Component {
    constructor() {
        super();
        this.state = {
            myList: []
        }
    }

    // 获取服务器端的数据
    componentWillMount(){
        fetch('http://172.163.100.62/ajia_code/data/product/list.php')
        .then((response)=>response.json())
        .then((response)=>{
            //将response中的data对应的数组 保存在状态中
            //如果不想提示警告，说少了key属性，
            //只需要在数据源对应的数组的每一个元素中，添加一个key属性

            //?怎么给对象数组中的每一个对象 添加一个key属性
            var nowList = response.data;
            for(var i=0;i<nowList.length;i++){
                nowList[i].key = i;
            }
            this.setState({myList:nowList})
        })
    }

    //列表点按时，弹窗显示该商品已销售数量
    handlePress=(index)=>{
        var count = this.state.myList[index].sold_count;
        alert("该商品已买了"+count);
    }

    //将服务器端返回的数据 渲染在每一个列表项中
    showItem = (info) => {
        //info.item 是data所指定的数组的元素
        //info.index 是遍历当前列表项的序号
        return <View >
            <TouchableOpacity 
                onPress={()=>{this.handlePress(info.index)}}
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={{uri:'http://172.163.100.62/ajia_code/'+info.item.pic}} />
                <Text>{info.item.title}</Text>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
        </View>
    }

    //指定列表项点击时的处理效果和处理函数

    render() {
        return <FlatList
            renderItem={this.showItem}
            data={this.state.myList} />
    }

}