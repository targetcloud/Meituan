/**
 * Created by targetcloud on 2016/12/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

var CommonCell = require('../Common/CommonCell');
var ShoppingCenterData = require('../../LocalDatas/shoppingCenter.json');

var ShoppingCenter = React.createClass({
    getDefaultProps(){
        return{
            popToHome: null
        }
    },

    render() {
        return (
            <View style={{marginTop:12}}>
                <CommonCell leftIcon="gw" leftTitle="购物中心" rightTitle={ShoppingCenterData.tips}/>
                <ScrollView style={{flexDirection:'row',backgroundColor:'white',padding:10}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    },

    renderAllItem(){
        var itemArr = [];
        var shoppingCenterData= ShoppingCenterData.data;
        for (var i=0; i<shoppingCenterData.length; i++){
            var data = shoppingCenterData[i];
            itemArr.push(
                <ShoppingCenterItem
                    shopImage = {data.img}
                    shopSale = {data.showtext.text}
                    shopName = {data.name}
                    detailurl = {data.detailurl}
                    key={i}
                    popToShoppingCenter = {(url)=>this.popToHome(url)}/>
            );
        }
        return itemArr;
    },

    popToHome(url){
        if (this.props.popToHome == null) return;
        this.props.popToHome(url);
    }
});

var ShoppingCenterItem = React.createClass({
    getDefaultProps(){
        return{
            shopImage:'',
            shopSale:'',
            shopName:'',
            detailurl:'',
            popToShoppingCenter: null
        }
    },

    render(){
        return(
            <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
                <View style={{margin:8}}>
                    <Image source={{uri: this.props.shopImage}} style={{width:120,height:100,borderRadius:8}}/>
                    <Text style={{position:'absolute',left:0,bottom:30,backgroundColor:'red',color:'white',padding:2}}>{this.props.shopSale}</Text>
                    <Text style={{textAlign:'center',marginTop:5}}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    clickItem(url){
        if (this.props.detailurl == '') return;
        if (this.props.popToShoppingCenter == null) return;
        this.props.popToShoppingCenter(url);
    }

});

module.exports = ShoppingCenter;
