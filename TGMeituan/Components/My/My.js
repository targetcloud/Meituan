/**
 * Created by targetcloud on 2016/12/21.
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';

var MyCell = require('./MyCell');
var MyOrderView = require('./MyOrderView');
var MyHeadView = require('./MyHeadView');

var My = React.createClass({
    render() {
        return (
            <ScrollView style={{backgroundColor: '#F2F2F2'}} contentInset={{top: -200}} contentOffset={{y: 200}}>
                <MyHeadView />
                <View>
                    <MyCell leftIconName='collect' leftTitle='我的订单' rightTitle='查看全部订单'/>
                    <MyOrderView />
                </View>
                <View style={{marginTop: 8}}>
                    <MyCell leftIconName='draft' leftTitle='我的钱包' rightTitle='账户余额:¥100'/>
                    <MyCell leftIconName='like' leftTitle='抵用券' rightTitle='10张'/>
                </View>
                <View style={{marginTop: 8}}>
                    <MyCell leftIconName='card' leftTitle='积分商城'/>
                </View>
                <View style={{marginTop: 8}}>
                    <MyCell leftIconName='new_friend' leftTitle='今日推荐' rightIconName='me_new'/>
                </View>
                <View style={{marginTop: 8}}>
                    <MyCell leftIconName='pay' leftTitle='我要合作' rightTitle='轻松开店,招财进宝'/>
                </View>
            </ScrollView>
        );
    }
});

module.exports = My;