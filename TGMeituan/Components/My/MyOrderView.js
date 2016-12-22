/**
 * Created by targetcloud on 2016/12/21.
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

var myOrderData = require('../../LocalDatas/myOrder.json');

var MyOrderView = React.createClass({
    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white'}}>{this.renderAllItem()}</View>
        );
    },

    renderAllItem(){
        var itemArr = [];
        for (var i = 0; i < myOrderData.length; i++) {
            var data = myOrderData[i];
            itemArr.push(<InnerView key={i} iconName={data.iconName} title={data.title}/>);
        }
        return itemArr;
    }
});


var InnerView = React.createClass({
    getDefaultProps(){
        return {
            iconName: '',
            title: ''
        }
    },

    render(){
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=> {alert(this.props.title)}}>
                <View style={{width: 70, height: 70, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: this.props.iconName}} style={{width: 40, height: 30, marginBottom: 3}}/>
                    <Text style={{color: 'gray'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

module.exports = MyOrderView;