import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tab2 from '../Navigation/TopTab/tab2';
import Tab1 from '../Navigation/TopTab/tab1';

const Tab = createMaterialTopTabNavigator();

const TabBarLabel = ({ focused }) => ({
  color: focused ? '#fff' : '#6231AD'
});

const Profile = () => {
  return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../Assets/king.png')}
          />
          <Text style={styles.title}>
            Profile
          </Text>
          <Image
            style={styles.messageIcon}
            source={require('../Assets/message.png')}
          />
        </View>
        <View style={styles.profileInfo}>
          <Image
            style={styles.profileImage}
            source={require('../Assets/profile.png')}
          />
          <Text style={styles.name}>Jina Simons</Text>
          <Text style={styles.points}>6000 Pts</Text>
          <Text style={styles.bio}>
            I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!
          </Text>
          <View style={styles.logoutContainer}>
            <Image
              source={require('../Assets/logout.png')}
            />
            <Text style={styles.logoutText}>
              Logout
            </Text>
          </View>
        </View>
        <View style={styles.midpartContainer}>
          <Image
            style={styles.midpartImage}
            source={require('../Assets/midpart.png')}
          />
        </View>
        <View style={styles.tabContainer}>
        <Tab.Navigator
          style={styles.tabNavigator}
          tabBarOptions={{
            style: {
              height: '20%',
            },
            inactiveTintColor: '#727682',
            activeTintColor: '#6231AD',
            tabBarLabelStyle: TabBarLabel,
          }}
        >
          <Tab.Screen
            name="games played" component={Tab1} />
          <Tab.Screen
            name="badges" component={Tab2} />
        </Tab.Navigator>
      </View>
      </View>
     

  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    top: 20,
  },
  logo: {
    height: 29,
    width: 29,
  },
  title: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 17.07,
    color: '#727682',
    top: 10,
  },
  messageIcon: {
    height: 31,
    width: 31,
    resizeMode: 'contain',
  },
  profileInfo: {
    top: 50,
  },
  profileImage: {
    height: 75,
    width: 75,
    alignSelf: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    color: '#333333',
    alignSelf: 'center',
    letterSpacing: 0.5,
    top: 20,
  },
  points: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.63,
    color: '#727682',
    alignSelf: 'center',
    letterSpacing: 0.5,
    top: 30,
  },
  bio: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#727682',
    alignSelf: 'center',
    letterSpacing: 0.5,
    top: 40,
    maxWidth: '80%',
  },
  logoutContainer: {
    flexDirection: 'row',
    top: 60,
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    color: '#727682',
    alignSelf: 'center',
    letterSpacing: 0.5,
    left: 7.5,
  },
  midpartContainer: {
    marginTop: 130,
  },
  midpartImage: {
    top: 0,
    alignSelf: 'center',
  },
  tabContainer: {
    flex: 1,
    top: 0,
  },
  tabNavigator: {
    height: 250,
    backgroundColor: '#6231AD',
  },
});
