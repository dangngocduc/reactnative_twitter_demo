
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import SplashScreen from '../features';
import { MainNavigation } from './MainNavigation';

export const AppNavigation = createAppContainer(createSwitchNavigator(
    {
        SplashScreen : SplashScreen,
        MainFlow : MainNavigation,
    },
    {
        initialRouteName: "MainFlow"
    }
));