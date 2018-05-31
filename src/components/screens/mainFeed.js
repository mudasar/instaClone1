import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import { PostFeed } from '../container';

export class MainFeed extends Component {

    static navigationOptions = {
      title: 'Instagram',
    };

    constructor(props) {
        super(props);
        this.state = {
        
        };

        
    }

    componentDidMount = () => {
      
    }

    
    

  render() {
     
    return (
      <View style={styles.container}>
        <View style={styles.tempNav} >
        <Text style={styles.headerTitle}>Instagram</Text>
        </View>
        <View style={{width: '100%'}}>
        <PostFeed />
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%'
    },
    tempNav: {
        width: "100%",
        height: 55,
        alignItems: 'center',
      //justifyContent: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'rgba(233,233,233,1)',
      backgroundColor: 'rgb(250,250,250)',
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '600',
        marginTop:20
    },
  });

export default MainFeed;      
