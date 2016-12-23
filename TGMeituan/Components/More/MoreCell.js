/**
 * Created by targetcloud on 2016/12/21.
 * http://blog.csdn.net/callzjy/article/details/53856163
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Switch
} from 'react-native';

var MoreCell = React.createClass({
    getDefaultProps(){
        return{
            title: '',
            isSwitch: false,
            rightTitle: ''
        }
    },

    getInitialState(){
        return{
            isOn:false
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert(this.props.title)}}>
                <View style={{height:Platform.OS == 'ios' ? 54: 42,backgroundColor:'white',borderBottomColor:'#dddddd',borderBottomWidth:0.2,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{marginLeft:8}}>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },

    renderRightView(){
        if (this.props.isSwitch){
            return(<Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}} style={{marginRight:8}} />)
        }else{
            return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8}}/>
                </View>
            )
        }
    },

    rightTitle(){
        if(this.props.rightTitle.length > 0){
            return( <Text style={{color:'gray', marginRight:3}}>{this.props.rightTitle}</Text>)
        }
    }
});

module.exports = MoreCell;
