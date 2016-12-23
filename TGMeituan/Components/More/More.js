/**
 * Created by targetcloud on 2016/12/21.
 * http://blog.csdn.net/callzjy/article/details/53856163
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

var Cell = require('./MoreCell');

var More = React.createClass({
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#F2F2F2',}}>
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop:8}}>
                        <Cell title='扫一扫'/>
                    </View>
                    <View style={{marginTop:8}}>
                        <Cell title='省流量模式' isSwitch={true}/>
                        <Cell title='消息提醒'/>
                        <Cell title='邀请好友使用码团'/>
                        <Cell title='清空缓存' rightTitle='1.99M'/>
                    </View>
                    <View style={{marginTop:8}}>
                        <Cell title='问卷调查'/>
                        <Cell title='支付帮助'/>
                        <Cell title='网络诊断'/>
                        <Cell title='关于美团'/>
                        <Cell title='我要应聘'/>
                    </View>
                    <View style={{marginTop:8}}>
                        <Cell title='精品应用'/>
                    </View>
                </ScrollView>
            </View>
        );
    },

    renderNavBar(){
        return(
            <View style={{height: Platform.OS == 'ios' ? 64 : 44,backgroundColor:'rgba(33,192,174,1.0)',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity onPress={()=>{alert('setting')}} style={{position:'absolute',right:10,bottom:Platform.OS == 'ios' ? 15:13}}>
                    <Image source={{uri: 'icon_mine_setting'}} style={{width:Platform.OS == 'ios' ? 28: 24,height:Platform.OS == 'ios' ? 28: 24,}}/>
                </TouchableOpacity>
            </View>
        )
    }
});

module.exports = More;
