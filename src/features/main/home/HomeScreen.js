import React, { Component } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import HeaderMainScreen from '../../../components/HeaderMainScreen';

export default class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <HeaderMainScreen
                        type='home'/>
                </View>
            </SafeAreaView>
        );
    }
} 