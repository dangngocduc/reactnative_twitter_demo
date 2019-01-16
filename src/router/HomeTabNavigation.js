
import { createBottomTabNavigator} from 'react-navigation'
import HomeScreen from '../features/main/home/HomeScreen';
import MessageScreen from '../features/main/message/MessageScreen';
import NotificationScreen from '../features/main/notifications/NotificationScreen';
import TrendingScreen from '../features/main/trending/TrendingScreen';
import { Icon } from 'react-native-elements';
import React from "react";
import R from '../resources/R';
import { hexToRGB } from '../theme/Colors';

export const HomeTabNavigation = createBottomTabNavigator(
    {
        HomeScreen : HomeScreen,
        TrendingScreen : TrendingScreen,
        NotificationScreen : NotificationScreen,
        MessageScreen : MessageScreen,
    },
    {
        initialRouteName: "HomeScreen",
        defaultNavigationOptions : ({navigation}) => (
            {
                tabBarIcon : ({ focused, horizontal, tintColor }) => {
                        switch (navigation.state.routeName) {
                            case 'HomeScreen':
                                return (
                                    <Icon 
                                        name='home'
                                        color = {tintColor} />
                                )
                                break;
                            case 'TrendingScreen': 
                                return (
                                    <Icon 
                                        name='search'
                                        color = {tintColor} />
                                )
                            case 'NotificationScreen': 
                                return (
                                    <Icon 
                                        name='notifications'
                                        color = {tintColor} />
                                )
                            default:
                            return (
                                    <Icon 
                                        name='email'
                                        color = {tintColor} />
                                )
                                break;
                        }
                    
                
                },
                tabBarLabel : null
            }
        ),
        tabBarOptions : {
            showLabel : false,
            activeBackgroundColor : R.colors.background,
            inactiveBackgroundColor : R.colors.background,
            activeTintColor : R.colors.primary,
            inactiveTintColor : hexToRGB(R.colors.primary, 0.3)
        }
    }
);