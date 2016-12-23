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
    Image
} from 'react-native';

var Main = require('./Main');

var Launch = React.createClass({
    render() {
        return (
            <Image source={{uri: 'launchimage'}} style={{flex:1}}/>
        );
    },

    componentDidMount(){
        setTimeout(()=>{this.props.navigator.replace({component: Main});}, 1500);
    }
});

module.exports = Launch;