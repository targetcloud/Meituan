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

var CommonView = React.createClass({
    getDefaultProps(){
        return{
            title:'',
            subTitle: '',
            rightIcon: '',
            titleColor: '',
            tplurl: '',
            callBackClickCell: null
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
                <View style={{backgroundColor:'white',width:width * 0.5-1 ,height:59,marginBottom:1,marginRight:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    <View>
                        <Text style={{color:this.props.titleColor,fontSize:18,fontWeight:'bold'}}>{this.props.title}</Text>
                        <Text style={{color:'gray'}}>{this.props.subTitle}</Text>
                    </View>
                    <Image source={{uri: this.props.rightIcon}} style={{width:64,height:48, resizeMode:'contain'}}/>
                </View>
            </TouchableOpacity>
        );
    },

    clickCell(data){
        if (this.props.tplurl == '') return;
        if (this.props.callBackClickCell == null) return;
        this.props.callBackClickCell(data);
    }
});

module.exports = CommonView;
