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
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}onPress={()=>{this.pushToDetail('https://github.com/targetcloud/Meituan')}}>
                    <Text style={{color:'white',marginTop:Platform.OS == 'ios' ? 10 : 4}}>上海</Text>
                    <Image source={{uri:'icon_homepage_down_arrow'}} style={{width:Platform.OS == 'ios' ? 13: 10,height:Platform.OS == 'ios' ? 10: 8,marginTop:Platform.OS == 'ios' ? 12: 5}}/>
                </TouchableOpacity>
                <TextInput underlineColorAndroid={'white'} placeholder="输入商家, 品类, 商圈" style={{width:width * 0.7,height:Platform.OS == 'ios' ? 36 : 30,backgroundColor:'white',
                    marginTop: Platform.OS == 'ios' ? 18 : 0,fontSize: Platform.OS == 'ios' ? 14 : 10,
                    paddingTop: Platform.OS == 'ios' ? 4 : 2,
                    paddingBottom: Platform.OS == 'ios' ? 4 : 2,
                    paddingLeft:8,
                    borderRadius:8}}/>
                <View style={{flexDirection:'row',height:64,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>{this.pushToDetail('https://github.com/targetcloud')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={{width:Platform.OS == 'ios' ? 28: 24,height:Platform.OS == 'ios' ? 28: 24,marginTop:Platform.OS == 'ios' ? 10: 0}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.pushToDetail('http://blog.csdn.net/callzjy')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={{width:Platform.OS == 'ios' ? 28: 24,height:Platform.OS == 'ios' ? 28: 24,marginTop:Platform.OS == 'ios' ? 10: 0}} />
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
