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
    Image
} from 'react-native';

var highestReductionData = require('../../LocalDatas/highestReduction.json');
var CommonView = require('../Common/CommonView');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var HighestReduction = React.createClass({
    getDefaultProps(){
        return{
            popToHome: null
        }
    },

    render() {
        var dataTop=highestReductionData.highestReduction[0];
        return (
            <View style={{marginTop:12}}>
                <View style={{backgroundColor:'white',width:width, height:59,marginBottom:1, flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View>
                        <Text style={{color:'red',fontSize:18,fontWeight:'bold',marginLeft:16}}>{dataTop.title}</Text>
                        <Text style={{color:'gray',marginLeft:16}}>{dataTop.subTitle}</Text>
                    </View>
                    <Image source={{uri: dataTop.image}} style={{width:64,height:48,marginRight:16, resizeMode:'contain'}}/>
                </View>
                <View style={{flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>{this.renderBottomItem()}</View>
            </View>
        );
    },

    renderBottomItem(){
        var itemArr = [];
        var dataArr = highestReductionData.data;
        for(var i=0; i<dataArr.length; i++){
            var itemData = dataArr[i];
            itemArr.push(
                <CommonView
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
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

module.exports = HighestReduction;
