import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItem
  } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Image, StyleSheet, Text } from 'react-native';

  export default CustomDrawerContent = props => {
    return (
      <View style={styles.container}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerHeader}>
            <View style={{flex: 1}}>
              <Image source={require('../assets/images/logo.png')} style={styles.drawerImage} />
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.drawerHeaderText}>Everest Cafeteria</Text>
            </View>
          </View>

          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name='home'
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name='info-circle'
                  color={color}
                  size={size}
                />
              )}
              label="About Us"
              onPress={() => props.navigation.navigate('About')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name='list'
                  color={color}
                  size={size}
                />
              )}
              label="Menu"
              onPress={() => props.navigation.navigate('Menu')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name='address-card'
                  color={color}
                  size={size}
                />
              )}
              label="Contact Us"
              onPress={() => props.navigation.navigate('Contact')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name='utensils'
                  color={color}
                  size={size}
                />
              )}
              label="Reservation"
              onPress={() => props.navigation.navigate('Reservation')}
            />
          </View>
        </DrawerContentScrollView>
        
        <View style={styles.bottomDrawerSection}>
          <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name='sign-out-alt'
                  color={color}
                  size={size}
                />
              )}
              label="Sign Out"
          />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 70,
      height: 50
    },
    bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
    },
    drawerSection: {
      marginTop: 15,
    }
  });
