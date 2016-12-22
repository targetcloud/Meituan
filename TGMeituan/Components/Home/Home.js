/**
 * Created by targetcloud on 2016/12/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var TopMenu = require('./TopMenu');
var WellknownShop = require('./WellknownShop');
var HighestReduction = require('./HighestReduction');
var ShoppingCenter = require('./ShoppingCenter');
var DetailPage = require('../Common/DetailPage');
var GuessLike = require('./GuessLike');
var HotChannel = require('./HotChannel');

var Home = React.createClass({
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#F2F2F2'}}>
                {this.renderNavbar()}
                <ScrollView>
                    <TopMenu />
                    <WellknownShop />
                    <HighestReduction popToHome={(url) => this.pushToDetail(url)}/>
                    <ShoppingCenter popToHome = {(url) => this.pushToDetail(url)}/>
                    <HotChannel popToHome = {(url) => this.pushToDetail(url)}/>
                    <GuessLike />
                </ScrollView>
            </View>
        );
    },

    renderNavbar(){
        return(
            <View style={{height: Platform.OS == 'ios' ? 64 : 44,backgroundColor:'rgba(33,192,174,1.0)',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <TouchableOpacity onPress={()=>{this.pushToDetail('')}}>
                    <Text style={{color:'white',marginTop:8}}>上海</Text>
                </TouchableOpacity>
                <TextInput placeholder="输入商家, 品类, 商圈" style={{width:width * 0.7,height:Platform.OS == 'ios' ? 36 : 30,backgroundColor:'white',marginTop: Platform.OS == 'ios' ? 18 : 0,borderRadius:8,paddingLeft:8}}/>
                <View style={{flexDirection:'row',height:64,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>{alert('message')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={{width:Platform.OS == 'ios' ? 28: 24,height:Platform.OS == 'ios' ? 28: 24}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('scan')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={{width:Platform.OS == 'ios' ? 28: 24,height:Platform.OS == 'ios' ? 28: 24}} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    },

    pushToDetail(url){
        var dealurl = url.replace('imeituan://www.meituan.com/web?url=', '')
                         .replace('imeituan://www.meituan.com/web/?url=', '')
                         .replace('imeituan://www.meituan.com/hotel/hybrid/web?url=','')
                         .replace('imeituan://www.meituan.com/web/search?url=', '');
        this.props.navigator.push(
            {
                component: DetailPage,
                passProps: {'url': dealurl}
            }
        );
    }
});

module.exports = Home;
