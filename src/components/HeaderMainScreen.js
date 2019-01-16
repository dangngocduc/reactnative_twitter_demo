import React from "react";
import PropTypes from 'prop-types'; 

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  I18nManager
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import colors, { hexToRGB } from "../theme/Colors";
import R from "../resources/R";

export default class HeaderMainScreen extends React.Component {
  static propTypes = {
    type : PropTypes.oneOf(['home', 'trending'])
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: R.colors.background,
          alignItems: "center",
          elevation: 4
        }}
      >
        <Avatar
          containerStyle={{ margin: 8 }}
          size="small"
          rounded={true}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/968110489770246144/NT_I6ehi_400x400.jpg"
          }}
        />
        <View style={{ flex: 1 }}>
          <MidleViewHeader 
            type={this.props.type}/>
        </View>
        <Icon
          name="settings"
          iconStyle={{ padding: 12 }}
          color={R.colors.primary}
        />
      </View>
    );
  }
}

class MidleViewHeader extends React.Component {
    static propTypes = {
        type : PropTypes.oneOf(['home', 'trending'])
      };
  render() {
      switch(this.props.type) {
          case 'trending' : {
            return (
                <View
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    borderRadius: 32,
                    borderWidth: 0.5,
                    borderColor: hexToRGB(R.colors.dividerColor, 0.3)
                  }}
                >
                  <Text
                    style={[
                      { color: hexToRGB(R.colors.onBackground, 0.7) },
                      R.TextApr.txt_body2
                    ]}
                  >
                    Search Twitter
                  </Text>
                </View>
              );
              break;
          }

          default : {
              return (
                <Text
                style={[
                  { color: hexToRGB(R.colors.onBackground, 0.7) },
                  R.TextApr.txt_body2
                ]}
              >
                Search Twitter
              </Text>
              )
          }
      }
   
  }
}
