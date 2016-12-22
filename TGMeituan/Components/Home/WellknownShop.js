/**
 * Created by targetcloud on 2016/12/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var CommonView = require('../Common/CommonView');
var WellknownShopData = require('../../LocalDatas/wellknownShop.json');

var WellknownShop = React.createClass({
    render() {
        return (
            <View style={{marginTop:12,flexDirection:'row'}}>
                {this.renderLeftView()}
                <View>{this.renderRightView()}</View>
            </View>
        );
    },

    renderLeftView(){
        var data = WellknownShopData.dataLeft[0];
        return(
            <TouchableOpacity onPress={()=>{alert(data.title)}}>
                <View style={{width:width * 0.5,height:119,backgroundColor:'white',marginRight:1,alignItems:'center',justifyContent:'center'}}>
                    <Image source={{uri:data.img1}} style={{width:120,height:30,resizeMode:'contain'}}/>
                    <Image source={{uri:data.img2}} style={{width:120,height:30,resizeMode:'contain'}} />
                    <Text style={{color:'gray'}}>{data.title}</Text>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <Text style={{color: 'rgba(33,192,174,1.0)', marginRight:5}}>{data.price}</Text>
                        <Text style={{color: 'orange', backgroundColor:'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    renderRightView(){
        var itemArr = [];
        var data = WellknownShopData.dataRight;
        for(var i=0; i<data.length; i++){
            var dataItem = data[i];
            itemArr.push(
                <CommonView title={dataItem.title}  subTitle={dataItem.subTitle} rightIcon={dataItem.rightImage} titleColor={dataItem.titleColor} key={i}/>
            );
        }
        return itemArr;
    }
});

module.exports = WellknownShop;
