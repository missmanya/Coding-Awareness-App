import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image, ScrollView} from "react-native";
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
              <Text style={styles.appTitleText}>Electric Vehicles</Text>
            </View>
          <View style={styles.cardContainer}>
              <Image
              source={require("../assets/ev.jpg")}
              style={styles.storyImage}
            ></Image>
          
          </View>
          <View style={styles.textContainer}>
         <Text style={styles.Codetext}>   Electronic Vehicles (EV)
An electric car, battery electric car, or all-electric car, is an automobile that is propelled by one or more electric motors, using only energy stored in batteries. Compared to internal combustion engine (ICE) vehicles, electric cars are quieter, have no exhaust emissions, and lower emissions overall. Electric vehicles use electricity to charge their batteries instead of using fossil fuels like petrol or diesel. Electric vehicles are more efficient, and that combined with the electricity cost means that charging an electric vehicle is cheaper than filling petrol or diesel for your travel requirements. Electric cars function by plugging into a charge point and taking electricity from the grid. They store the electricity in rechargeable batteries that power an electric motor, which turns the wheels. Electric cars accelerate faster than vehicles with traditional fuel engines – so they feel lighter to drive 
Advantages of Electric Vehicles are :
	No fuel required so you save money on gas. 
	Environmental friendly as they do not emit pollutants.
Lower maintenance due to an efficient electric motor. 
	Better Performance etc.
{'\n'}
Example of electric vehicles are:{'\n'}
•	Toyota Mirai{'\n'}
•	Riversimple Rasa{'\n'}
•	Hyundai Tucson FCEV{'\n'}
•	Honda Clarity Fuel Cell{'\n'}
•	Hyundai Nexo etc </Text>


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
