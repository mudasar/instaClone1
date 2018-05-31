import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import config from '../../config';

export class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            liked: false,
            likes: 30
        };

        this.onPress = this.ononPress.bind(this);
    }

    componentDidMount = () => {
      this.setState({width: Dimensions.get('window').width});
    }

    ononPress(e){
        this.setState({liked: !this.state.liked, likes: this.state.likes + 1});
    }
    

  render() {
      const imageHeight = Math.floor(this.state.width * 1.1);
      const imageWidth = Math.floor(this.state.width * 0.99);
      const imageUrl =  `https://picsum.photos/${this.state.width}/600/?random`;
      const likedIconColor = this.state.liked ? 'rgb(252,61, 57)' : null;
    return (
      <View style={styles.container}>
        <View style={styles.userBar}>
        <View style={styles.userInfo}>
            <Image source={{uri: "https://picsum.photos/80/80/?random"}} style={styles.profileImg} />
            <Text>Mudasar</Text>
        </View>
        
        <View style={styles.settingsInfo}>
            <Text style={styles.settingsText}>...</Text>
        </View>
        </View>
        <TouchableOpacity onPress={this.onPress} activeOpacity={1}>
            <Image source={{uri: imageUrl}}  style={{width: imageWidth, height: imageHeight, marginVertical:1}} />
        </TouchableOpacity>
        <View style={styles.iconBar}>
            <View style={styles.userInfo}>
                <TouchableOpacity onPress={this.onPress} activeOpacity={1}>
                    <Image source={config.images.heartIcon} style={[styles.icon, {height: 35, width: 35, tintColor: likedIconColor}]} />
                </TouchableOpacity>
                <Image source={config.images.chatIcon} style={[styles.icon, {height: 35, width: 35}]} />
                <Image source={config.images.arrowIcon} style={[styles.icon, {height: 35, width: 35}]} />
            </View>
        </View>
        <View style={styles.iconBar}>
            <View style={styles.userInfo}>
                <Image source={config.images.heartIcon} style={[styles.icon, {height: 30, width: 30}]} />
               <Text style={styles.likesText}>{this.state.likes} likes</Text>
            </View>
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
    img: {
        // width: "98%",
        // height: 405,
        //margin: 10
    },
    
    userBar: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImg:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
        marginRight:10
    },
    settingsInfo: {
        alignItems: 'center',
    },
    settingsText: {
        fontSize: 30,
        marginRight:10,
        fontWeight: '900'
    },
    iconBar:{
        height: config.styleConstants.rowHeight,
        width: '100%',
        borderColor: 'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 10,
    },
    icon:{
        marginLeft: 5
    },
    likesText: {
        marginHorizontal: 10,
    }
  });

export default Post;