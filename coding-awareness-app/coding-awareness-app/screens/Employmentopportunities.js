import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image , ScrollView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};


export default class Employmentopportunities extends Component {
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
              source={require("../assets/job.jpg")}
              style={styles.storyImage}
            ></Image>
          
          </View>
          <View style={styles.textContainer}>
       <Text style={styles.Codetext}>    Job Opportunities 
AS we know coder are also called as software engineers. There is large scale of job opportunities if you are in this field because nowadays the importance of coder has been really upgraded as company do need someone how can do the coding work, we know world depend on coding in present time. It would provide good amount of money. Less than 1 year experience to 4 years ranges from ₹ 1.1 lakhs to ₹ 15.5 lakhs with an average annual salary of ₹ 2.5 lakhs based on 151 salaries. 10 jobs which coder can get:
{'\n'}
•	Computer programmer{'\n'}
•	Web developer {'\n'}
•	Front- end developer{'\n'}
•	Back- end developer {'\n'}
•	Full-stake developer {'\n'}
•	Software application developer{'\n'}
•	Computer system analyst {'\n'}
•	Computer engineer system {'\n'}
•	Network systems administrative {'\n'}
•	Database administrator{'\n'} 
These are some sort of job which can be provided to coder on high salary if u have knowledge and experience about coding</Text>

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
