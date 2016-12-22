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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70: 60;
var cellH = 70;
var vMargin = (width - cellW * cols) / (cols + 1);

var TopListView = React.createClass({
    getDefaultProps(){
        return{
            dataArr: []
        }
    },

    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});
        return{
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',alignItems:'center',width:width}}
                scrollEnabled={false}/>
        );
    },

    renderRow(row){
        return(
            <TouchableOpacity onPress={()=>{alert(row.title)}}>
                <View style={{width:cellW,height:cellH,justifyContent:'center',alignItems:'center',marginTop:8,marginLeft:vMargin}}>
                    <Image source={{uri: row.image}} style={{width:52, height:52}}/>
                    <Text style={{fontSize:Platform.OS == 'ios' ? 13 : 12,color:'gray'}}>{row.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

module.exports = TopListView;
