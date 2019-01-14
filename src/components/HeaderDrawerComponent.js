import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList , I18nManager} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import colors from '../theme/Colors';
import R from '../resources/R';


export default class HeaderDrawerComponent extends Component {
    render() {
        return (
            <View style={{padding: 16.0}}>
                <Avatar
                    size='medium'
                    rounded ={true}
                    source={{uri:'https://pbs.twimg.com/profile_images/968110489770246144/NT_I6ehi_400x400.jpg'}}
                />
                <View style={{flexDirection:'row', paddingTop : 16.0}}>
                   <View style={{flex:1}}>
                        <Text style={[R.TextApr.txt_body2, {color: R.colors.onBackground}]}>Dang Ngoc Duc</Text>
                        <Text style={[R.TextApr.txt_caption, {color: R.colors.onBackground}]}>@dangngocduc</Text>
                   </View>
                    <Icon 
                        name='keyboard-arrow-down'
                        color={colors.iconColor}/>
                </View>
                <View style={{flexDirection:'row', paddingTop : 16}}>
                    <Text style={[R.TextApr.txt_body2, {color: R.colors.onBackground}]}>51</Text>
                    <Text style={[R.TextApr.txt_body2, {color: R.colors.onBackground, paddingLeft: 4}]}>following</Text>
                    <Text style={[R.TextApr.txt_body2, {color: R.colors.onBackground, paddingLeft: 16}]}>1</Text>
                    <Text style={[R.TextApr.txt_body2, {color: R.colors.onBackground, paddingLeft: 4}]}>follower</Text>
                </View>

            </View>
        )
    }
}