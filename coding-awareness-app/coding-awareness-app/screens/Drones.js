import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image , ScrollView, Br} from "react-native";
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
              <Text style={styles.appTitleText}>Drones</Text>
            </View>
          <View style={styles.cardContainer}>
              <Image
              source={require("../assets/Drones.jpg")}
              style={styles.storyImage}
            ></Image>
          
          </View>
          <View style={styles.textContainer}>
        <Text style={styles.Codetext}>     Drones
, sometimes referred to as unmanned aerial vehicles (UAVs), carry out tasks that range from the mundane to the ultra-dangerous. These robot-like aircrafts can be found rescuing avalanche victims as well as dropping off groceries at your doorstep — and almost everywhere in between. Originally developed for the military and aerospace industries, drones have found their way into the mainstream because of the enhanced levels of safety and efficiency they bring. These robotic UAVs operate without a pilot on board and with different levels of autonomy. A drone’s autonomy level can range from remotely piloted (a human controls its movements) to advanced autonomy, which means that it relies on a system of sensors and LiDAR detectors to calculate its movement.
How Do Drones Work? 
	Many parts are involved behind the scenes to support the seamless operation of drones, so it’s important to become familiar with the unmanned or remote technology that makes up a drone’s system. From delivering commands to ensuring a manageable weight, pilots must take into account the various factors that make a drone suited for specific jobs. Among the many variables in play, some of the most critical components of 
a drone to consider are its ground control station (GCS), payload and data links. World most dangerous drones in defence field are:{'\n'}
	Swarm Drones{'\n'}
	Bayraktar TB2{'\n'}
	TAI Aksungur{'\n'}
	GJ-11 Sharp Sword{'\n'}
	Okhotnik B{'\n'}
	EADS Barracuda{'\n'}
	MQ-9 Reaper</Text>

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
