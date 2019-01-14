import React from "react";
import { View, ScrollView} from "react-native";
import { createDrawerNavigator } from "react-navigation";
import HeaderDrawerComponent from "../components/HeaderDrawerComponent";
import HomeScreen from "../features/main/HomeScreen";
import colors from "../theme/Colors";
import { Divider, Icon } from "react-native-elements";
import R from "../resources/R";
import HeaderDrawerBodyMenu from "../components/HeaderDrawerBodyMenu";

export const MainNavigation = createDrawerNavigator(
  {
    HomeScreen: HomeScreen
  },
  {
    initialRouteName: "HomeScreen",
    drawerWidth: 320,
    contentComponent: () => {
      return (
        <View style={{ backgroundColor: colors.background, flex: 1 }}>
          <HeaderDrawerComponent />
          <Divider
            style={{
              height: 0.5,
              colors: R.colors.dividerColor
            }}
          />
          <View style={{ flex: 1 }}>
                <HeaderDrawerBodyMenu/>
          </View>
          <Divider
            style={{
              height: 0.5,
              colors: R.colors.dividerColor
            }}
          />
          <View
            style={{ flexDirection: "row", 
            justifyContent: "space-between" }}
          >
                <Icon 
                    iconStyle={{padding:12}}
                    name="brightness-2"
                    color={colors.iconColor} 
                />
                <Icon 
                    iconStyle={{padding:12}}
                    name="equalizer" 
                    color={colors.iconColor}
                />
          </View>
        </View>
      );
    }
  }
);
