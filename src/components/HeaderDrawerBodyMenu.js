import React, {Component} from 'react';
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity, FlatList , I18nManager} from 'react-native';
import { Icon } from 'react-native-elements';
import R from '../resources/R';

export default class HeaderDrawerBodyMenu extends React.Component {
    menus = [
        {
            "assetName" : 'account-circle',
            'title' : 'Profile'
        },
        {
            "assetName" : 'book',
            'title' : 'List'
        },
        {
            "assetName" : 'bookmark-border',
            'title' : 'Bookmark'
        },
        {
            "assetName" : 'flash-on',
            'title' : 'Profile'
        }
    ]
    
    render() {
        return (
            this.menus.map((item, index, array) => {
                return DrawerMenuItem({title :item.title, iconName : item.assetName})
            })
        );
    }

}

const DrawerMenuItem = ({iconName, title}) => {
    return (
        <View style={{
            flexDirection:'row', 
            alignItems:'center', 
            justifyContent:'flex-start',
            paddingHorizontal:16.0,
            paddingVertical:8
            }}>
            <Icon 
                iconStyle={{padding:12}}
                name={iconName}
                color={R.colors.iconColor}
            />
            <Text style={[R.TextApr.txt_body2, {color: R.colors.onBackground, paddingLeft: 12}]}>{title}</Text>
        </View>
    );
}
