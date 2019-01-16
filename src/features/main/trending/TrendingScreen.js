import React, { Component } from 'react';
import { Text, SafeAreaView,  View} from 'react-native';
import HeaderMainScreen from '../../../components/HeaderMainScreen';

export default class TrendingScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <HeaderMainScreen
                        type='trending'/>
                </View>
            </SafeAreaView>
        );
    }
} 