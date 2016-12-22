/**
 * Created by targetcloud on 2016/12/21.
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, Platform} from 'react-native';

var MyCell = React.createClass({
    getDefaultProps(){
        return {
            leftIconName: '',
            leftTitle: '',
            rightIconName: '',
            rightTitle: ''
        }
    },

    render(){
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', height: Platform.OS == 'ios' ? 60 : 42, borderBottomColor: '#F2F2F2', borderBottomWidth: 0.2}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 8}}>
                        <Image source={{uri: this.props.leftIconName}} style={{width: 24, height: 24, marginRight: 6, borderRadius: 12}}/>
                        <Text style={{fontSize: 16}}>{this.props.leftTitle}</Text>
                    </View>
                    <View>{this.rightSubView()}</View>
                </View>
            </TouchableOpacity>
        );
    },

    rightSubView(){
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {this.renderRightContent()}
                <Image source={{uri: 'icon_cell_rightArrow'}}
                       style={{width: 8, height: 13, marginRight: 8, marginLeft: 5}}/>
            </View>
        )
    },

    renderRightContent(){
        if (this.props.rightIconName.length == 0) {
            return (<Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>)
        } else {
            return (<Image source={{uri: this.props.rightIconName}} style={{width: 24, height: 13}}/>)
        }
    }
});

module.exports = MyCell;