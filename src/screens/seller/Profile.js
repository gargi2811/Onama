import { Box } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';


export default class Profile extends Component {

  render() {
    return (
      <Box bg="white">
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/194/194938.png' }} />
          <View style={styles.body}>
            <View style={styles.bodycontent}>
              <Text style={styles.name}>Srushti Kadam</Text>
              <Text style={styles.info}>Phone No. : 8624966920</Text>
              <Text style={styles.description}>Address : Somesh colony, Behind Kalamandir, Nanded-431 602</Text>

              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{ color: 'white' }}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  header: {
    height: 150,
    backgroundColor: '#e6f5f5',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 100
  },

  body: {
    marginTop: 25,
    marginBottom: 0,
  },

  bodycontent: {
    elevation: -1,
    height: 600,
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#e6f5f5',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },

  name: {
    fontSize: 28,
    marginTop: 40,
    color: "#003d7a",
    fontWeight: "bold"
  },

  info: {
    fontSize: 16,
    color: "#33cccc",
    marginTop: 20,
  },

  description: {
    fontSize: 16,
    color: "#003342",
    marginTop: 50,
    textAlign: 'center'
  },

  buttonContainer: {
    marginTop: 30,
    marginBottom: 0,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#008080",
  },
});

