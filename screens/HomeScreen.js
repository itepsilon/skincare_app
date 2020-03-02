import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Gentle Skin Cleanser',
    avatar_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561744686-147.jpg?crop=1xw:1.00xh;center,top&resize=768:*',
    subtitle: 'Gentle Skin Cleanser'
  },
  {
    name: 'Smart Custom Repair Concentrate Serum',
    avatar_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561136716-2169478_fpx.jpg?crop=0.813xw:1xh;center,top&resize=768:*',
    subtitle: 'Smart Custom Repair Concentrate Serum'
  },
  {
    name: 'Bienfait Multi-Vital Daily Oil',
    avatar_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561134560-lancome-bienfait-multi-vital-daily-oil-d-20160331145635413~471730.jpg?crop=0.524xw:0.785xh;0.223xw,0.114xh&resize=768:*',
    subtitle: 'Bienfait Multi-Vital Daily Oil'
  },
  {
    name: 'Le Life Créme Yeux Firming Anti-Wrinkle Eye Cream',
    avatar_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561135857-75bddf08-ab3f-4743-a333-df36f152edcb.jpg?crop=1.00xw:0.653xh;0,0.347xh&resize=768:*',
    subtitle: 'Le Life Créme Yeux Firming Anti-Wrinkle Eye Cream'
  },
  {
    name: 'Metacell Renewal B3',
    avatar_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561135245-62798.jpg?crop=0.667xw:1xh;center,top&resize=768:*',
    subtitle: 'Metacell Renewal B3'
  },
  {
    name: 'Gentle Skin Cleanser',
    avatar_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561744686-147.jpg?crop=1xw:1.00xh;center,top&resize=768:*',
    subtitle: 'Gentle Skin Cleanser'
  },
  {
    name: 'Smart Custom Repair Concentrate Serum',
    avatar_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561136716-2169478_fpx.jpg?crop=0.813xw:1xh;center,top&resize=768:*',
    subtitle: 'Smart Custom Repair Concentrate Serum'
  },
  {
    name: 'Bienfait Multi-Vital Daily Oil',
    avatar_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561134560-lancome-bienfait-multi-vital-daily-oil-d-20160331145635413~471730.jpg?crop=0.524xw:0.785xh;0.223xw,0.114xh&resize=768:*',
    subtitle: 'Bienfait Multi-Vital Daily Oil'
  },
  {
    name: 'Le Life Créme Yeux Firming Anti-Wrinkle Eye Cream',
    avatar_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561135857-75bddf08-ab3f-4743-a333-df36f152edcb.jpg?crop=1.00xw:0.653xh;0,0.347xh&resize=768:*',
    subtitle: 'Le Life Créme Yeux Firming Anti-Wrinkle Eye Cream'
  },
  {
    name: 'Metacell Renewal B3',
    avatar_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561135245-62798.jpg?crop=0.667xw:1xh;center,top&resize=768:*',
    subtitle: 'Metacell Renewal B3'
  },
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <SearchBar
          placeholder="Search"
          onChangeText={() => {}}
        />
        <View>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url }, rounded: false, size: "medium" }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))
        }
      </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
  headerStyle: {
    backgroundColor: '#3080E2',
    elevation: 0,
    shadowOpacity: 0
  },
  headerTintColor: '#333333',
  headerTitleStyle: {
      fontWeight: 'bold',
      color: '#ffffff'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    // paddingTop: 30,
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
