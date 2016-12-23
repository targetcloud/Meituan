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
    Platform,
    Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

var Homev = require('../Home/Home');
var Merchant = require('../Merchant/Merchant');
var My = require('../My/My');
var More = require('../More/More');

var Main = React.createClass({
    getInitialState(){
        return{
            selectedTab:'Home'
        }
    },

    render() {
        return (
            <TabNavigator>
                {this.renderTabbarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','Home', Homev)}
                {this.renderTabbarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','Merchant',  Merchant)}
                {this.renderTabbarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','My', My,3)}
                {this.renderTabbarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','More', More)}
            </TabNavigator>
        );
    },

    renderTabbarItem(title, iconName, selectedIconName, selectedTab, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={() =><Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={{color:'rgba(33,192,174,1.0)'}}
                badgeText = {badgeText}>

                <Navigator
                    initialRoute={{name:title,component:component}}
                    configureScene={()=>{return Navigator.SceneConfigs.PushFromRight;}}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}/>

            </TabNavigator.Item>
        );
    }
});


const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    },
});

module.exports = Main;
