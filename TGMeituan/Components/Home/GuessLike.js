/**
 * Created by targetcloud on 2016/12/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

var CommonCell = require('../Common/CommonCell');
var GuessLikeData = require('../../LocalDatas/guessLike.json');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var GuessLike = React.createClass({
    getDefaultProps(){
        return{
            api_url:'http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },

    getInitialState(){
        return{
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        }
    },

    render() {
        return (
            <View style={{marginTop:12}}>
                <CommonCell leftIcon = 'cnxh' leftTitle = '猜你喜欢'/>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow}/>
            </View>
        );
    },

    renderRow(row){
        return(
            <TouchableOpacity onPress={()=>alert(row.title)}>
                <View style={{backgroundColor:'white',padding:10,borderBottomColor:'#e8e8e8',borderBottomWidth:0.5,flexDirection:'row'}}>
                    <Image source={{uri: (row.imageUrl.search('w.h') == -1) ? row.imageUrl : row.imageUrl.replace('w.h', '120.90') }} style={{width:120,height:90,borderRadius:8}}/>
                    <View style={{marginLeft:8,width:width-156,justifyContent:'center'}}>
                        <View style={{flexDirection:'row',marginBottom:7,justifyContent:'space-between'}}>
                            <Text>{row.title}</Text>
                            <Text>{row.topRightInfo}</Text>
                        </View>
                        <Text style={{color:'gray'}}>{row.subTitle}</Text>
                        <View  style={{flexDirection:'row',marginTop:7,justifyContent:'space-between'}}>
                            <Text style={{color:'rgba(33,192,174,1.0)',fontSize:16,fontWeight:'bold'}}>{row.subMessage}</Text>
                            <Text style={{borderWidth:0.5, borderColor:'gray', borderRadius:4, padding:2, backgroundColor:'#FAFAFA', color:'#CDC9C9'  }}>{row.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },

    componentDidMount(){
        fetch(this.props.api_url)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error)=>{
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(GuessLikeData.data)
                });
            })
    },
});

module.exports = GuessLike;
