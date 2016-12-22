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
    ListView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var TopMenuData = require('../../LocalDatas/topMenu.json');
var TopListView = require('../Common/TopListView');

var TopMenu = React.createClass({
    getInitialState(){
        return{
            activePage: 0
        }
    },

    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onMomentumScrollEnd = {this.onScrollAnimationEnd}>
                    {this.renderScrollItem()}
                </ScrollView>

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },

    onScrollAnimationEnd(e){
        var activePage = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            activePage: activePage
        });
    },

    renderScrollItem(){
        var itemArr = [];
        var dataArr = TopMenuData.data;
        for(var i=0; i<dataArr.length; i++){
            itemArr.push(
                <TopListView key={i} dataArr={dataArr[i]}/>
            );
        }
        return itemArr;
    },

    renderIndicator(){
        var indicatorArr = [], style;
        for(var i=0; i<TopMenuData.data.length; i++){
            style = (i === this.state.activePage) ? {color:'rgba(33,192,174,1.0)'} :  {color:'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25}, style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    }
});

module.exports = TopMenu;
