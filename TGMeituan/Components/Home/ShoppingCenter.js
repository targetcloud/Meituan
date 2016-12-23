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
                    <Text style={{position:'absolute',left:0,bottom:30,backgroundColor:'rgba(33,192,174,0.6)',color:'white',padding:2}}>{this.props.shopSale}</Text>
                    <Text style={{textAlign:'center',marginTop:5}}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    clickItem(url){
        if (url == '') return;
        //url = url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594';
        if (this.props.popToShoppingCenter == null) return;
        this.props.popToShoppingCenter(url);
    }
});

module.exports = ShoppingCenter;
