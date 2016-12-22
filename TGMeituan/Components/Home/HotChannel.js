/**
 * Created by targetcloud on 2016/12/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var CommonCell = require('../Common/CommonCell');
var hotChannelData = require('../../LocalDatas/hotChannel.json');
var HotView = require('../Common/HotView');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var HotChannel = React.createClass({
    getDefaultProps(){
        return{
            popToHome: null
        }
    },

    render() {
        return (
            <View style={{marginTop:12}}>
                <CommonCell leftIcon='rm' leftTitle='热门频道' rightTitle='查看全部'/>
                <View style={{flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>{this.renderAllItem()}</View>
            </View>
        );
    },

    renderAllItem(){
        var itemArr = [];
        var dataArr = hotChannelData.data;
        for(var i=0; i<dataArr.length; i++){
            var itemData = dataArr[i];
            itemArr.push(
                <HotView
                    title={itemData.title}
                    subTitle={itemData.deputyTitle}
                    rightIcon={this.dealWithImgUrl(itemData.entranceImgUrl)}
                    titleColor={'rgba(33,192,174,0.7)'}
                    tplurl={itemData.target}
                    key={i}
                    callBackClickCell={(url)=>this.popToHome(url)}/>
            );
        }
        return itemArr;
    },

    popToHome(url){
        if (this.props.popToHome == null) return;
        this.props.popToHome(url);
    },

    dealWithImgUrl(url){
        return  (url.search('w.h') == -1) ? url : url.replace('w.h', '120.90')
    }
});

module.exports = HotChannel;
