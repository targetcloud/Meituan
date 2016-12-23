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

var CommonCell = React.createClass({
    getDefaultProps(){
        return{
            leftIcon: '',
            leftTitle: '',
            rightTitle: ''
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>alert(this.props.leftTitle)}>
                <View style={{height:44,flexDirection:'row',backgroundColor:'white',alignItems:'center',justifyContent:'space-between',borderBottomColor:'#F2F2F2',borderBottomWidth:0.1}}>
                    <View style={{flexDirection:'row',alignItems:'center',marginLeft:8}}>
                        <Image source={{uri: this.props.leftIcon}} style={{width:23, height:23, marginRight:5}}/>
                        <Text style={{fontSize:17}}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
                        <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
});

module.exports = CommonCell;