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
              <Text style={styles.appTitleText}>Artificial Intelligence And Robotics</Text>
            </View>
          <View style={styles.cardContainer}>
              <Image
              source={require("../assets/RoboticsandArtificialIntelligence.jpg")}
              style={styles.storyImage}
            ></Image>
          
          </View>
          <View style={styles.textContainer}>
        <Text style={styles.Codetext}>     Robotics and Artificial Intelligence 
Artificial intelligence (AI) broadly refers to any human-like behaviour displayed by a machine or system. In AI’s most basic form, computers are programmed to “mimic” human behaviour using extensive data from past examples of similar behaviour. This can range from recognizing differences between a cat and a bird to performing complex activities in a manufacturing facility. Whether you are talking about deep learning, strategic thinking, or another species of AI, the foundation of its use is in situations that require lightning-fast responses. With AI, machines can work efficiently and analyse vast amounts of data in the blink of an eye, solving problems through supervised, unsupervised, or reinforced learning. While its early forms enabled computers to play games like checkers against humans, AI is now part of our daily lives. We have AI solutions for quality control, video analytics, speech-to-text (natural language processing), and autonomous driving, as well as solutions in healthcare, manufacturing financial services, and entertainment</Text>

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
