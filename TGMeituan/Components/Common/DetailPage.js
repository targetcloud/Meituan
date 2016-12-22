/**
 * Created by targetcloud on 2016/12/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    WebView
} from 'react-native';

var DetailPage = React.createClass({
    getInitialState(){
        return{
            detailUrl: this.props.url
        }
    },

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height: Platform.OS == 'ios' ? 64 : 44,backgroundColor:'rgba(33,192,174,1.0)',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={{position:'absolute',left:8,bottom:Platform.OS == 'ios' ? 15:13}}>
                        <Image source={{uri: 'navigationbar_arrow_up'}} style={{width:Platform.OS == 'ios' ? 14: 24,height:Platform.OS == 'ios' ? 26:24}}/>
                    </TouchableOpacity>
                    <Text style={{color:'white', fontSize:16, fontWeight:'bold',paddingLeft:8,marginLeft:18}}>{this.props.url}</Text>
                </View>
                {this.renderWebview()}
            </View>
        );
    },

    renderWebview(){
        if (this.props.url.length>0) {
            return(<WebView
                automaticallyAdjustContentInsets={true}
                source={{uri: this.state.detailUrl}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                startInLoadingState={true}/>)
        }
    }
});

module.exports = DetailPage;
