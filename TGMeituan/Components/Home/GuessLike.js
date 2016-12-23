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
            api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/10?__vhost=api.mobile.meituan.com&position=31.264134%2C121.616997&ci=10&uuid=DA7C054748001CB5C2516E8180303BEF0DBA38E36426D19040D215D4D246D16D&utm_medium=iphone&utm_source=AppStore&rn_package_version=0&utm_campaign=AgroupBgroupH0&version_name=7.6.1&wifi-mac=fc%3Ad7%3A33%3Ad4%3A18%3Afa&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=258dbee4917f4a90fe3899c04bcf678e&wifi-name=TP-LINK_18FA&utm_content=DA7C054748001CB5C2516E8180303BEF0DBA38E36426D19040D215D4D246D16D&__reqTraceID=03D48D0A-B937-46DF-A30F-512C7D62E628&__skts=1482526504.368860&__skno=51BE8963-770C-4E39-AFF3-B19F4758BCDC&__skcy=uR1vkBw9P2ydJXmZ1oiVDJJcWwc%3D&msid=34E87CC7-9978-4821-ABB9-CF00186A8CE22016-12-24-03-49275&wifi-strength=&movieBundleVersion=100&client=iphone&wifi-cur=0&utm_term=7.6.1&supportId=1&offset=57'
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
                <View style={{backgroundColor:'white',padding:10,borderBottomColor:'#FAFAFA',borderBottomWidth:0.1,flexDirection:'row'}}>
                    <Image source={{uri: (row.imageUrl.search('w.h') == -1) ? row.imageUrl : row.imageUrl.replace('w.h', '120.90') }} style={{width:120,height:90,borderRadius:8}}/>
                    <View style={{marginLeft:8,width:width-156,justifyContent:'center'}}>
                        <View style={{flexDirection:'row',marginBottom:7,justifyContent:'space-between'}}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>{row.title}</Text>
                            <Text style={{color:'grey',alignSelf:'flex-end'}}>{row.topRightInfo}</Text>
                        </View>
                        <Text style={{color:'gray'}}>{row.subTitle}</Text>
                        <View  style={{flexDirection:'row',marginTop:7,justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',marginTop:7,justifyContent:'flex-start',alignItems:'flex-end'}}>
                              <Text style={{color:'rgba(33,192,174,1.0)',fontSize:18,fontWeight:'bold'}}>{row.mainMessage+row.mainMessage2} </Text>
                              <Text style={{color:'grey',}}>{row.subMessage} </Text>
                              {this.renderCampaignTag(row.campaign)}
                            </View>
                            <Text style={{color:'grey',alignSelf:'flex-end'}}>{row.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },

    renderCampaignTag(campaign){
        if (!campaign){
            return <Text/>
        }else {
            return <Text style={{color:'orange',borderWidth:0.5,borderColor:'orange',  borderRadius:4, padding:0.1}}>{campaign.tag}</Text>
        }
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
