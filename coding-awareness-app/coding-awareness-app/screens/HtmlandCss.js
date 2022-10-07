import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image , ScrollView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};


export default class HtmlandCss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <ScrollView style={styles.container}>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>CODING APP</Text>
            </View>
          <View style={styles.cardContainer}>
              <Image
              source={require("../assets/html.jpg")}
              style={styles.storyImage}
            ></Image>
          
          </View>
          <View style={styles.textContainer}>
      <Text style={styles.Codetext}>       Many people believe that HTML and CSS are the same, but they're actually both quite distinct languages. While they are often used together in coding and Web design, they can both be used separately too, and both have a myriad of different applications
             HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices</Text>
          </View>
          
          <View style={{ flex: 0.08 }} />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
    textAlign:"center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  storyImage:{
    width:"90%",
    height: RFValue(250),
    alignSelf: "center",
    
  },
  textContainer:{
    paddingTop:RFValue(20),
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    textAlign:"center"
  },
  Codetext:{
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  }
});
