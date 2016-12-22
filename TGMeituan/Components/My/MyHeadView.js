/**
 * Created by targetcloud on 2016/12/21.
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity, Platform} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var MyHeadView = React.createClass({
    render() {
        return (
            <View style={{height: Platform.OS == 'ios' ? 400 : 200, backgroundColor: 'rgba(33,192,174,1.0)'}}>
                <View style={{flexDirection: 'row', marginTop: Platform.OS == 'ios' ? 280 : 80, alignItems: 'center', justifyContent: 'space-around'}}>
                    <Image source={{uri: 'see'}} style={{width: 70, height: 70, borderRadius: 35, borderWidth: 3, borderColor: 'rgba(0,0,0,0.2)'}}/>
                    <View style={{flexDirection: 'row', width: width * 0.7}}>
                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>美团</Text>
                        <Image source={{uri: 'avatar_vip'}} style={{width: 17, height: 17}}/>
                    </View>
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8}}/>
                </View>
                <View style={{flexDirection: 'row', position: 'absolute', bottom: 0}}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },

    renderBottomItem(){
        var itemArr = [];
        var data = [{'number': '100', 'title': '优惠券'}, {'number': '12', 'title': '评价'}, {'number': '50', 'title': '收藏'}];
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            itemArr.push(
                <TouchableOpacity key={i}>
                    <View style={{width: (width / 3) + 1, height: 40, backgroundColor: 'rgba(255,255,255,0.4)', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: 'white'}}>
                        <Text style={{color: 'white'}}>{item.number}</Text>
                        <Text style={{color: 'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    }
});

module.exports = MyHeadView;