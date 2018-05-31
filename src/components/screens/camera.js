import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';

import main from '../../styles/main';
import config from '../../config';
class CameraScreen extends React.Component {

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
      };

      async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }

    constructor(props) {
        super(props);
        this.state = {};
    }

   async takePicture(){
       if(this.camera){
           const options = {quality: 0.9, base64:true};
           let photo = await this.camera.takePictureAsync(options);
           console.log('photo is taken');
           console.log(this.props.navigation.params);
            const resp = await fetch(`${config.baseUrl}/users/5b06e80e99c4c70014ea275c/photo`,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: {
                    photo: photo,
                }
                });
                let responseJson = await response.json();
                if(responseJson.confirmation === 'fail'){
                    alert(responseJson.message);
                    return;
                }

                console.log(responseJson);
       }
    }

    render() {
       
            const { hasCameraPermission } = this.state;
            if (hasCameraPermission === null) {
              return <View />;
            } else if (hasCameraPermission === false) {
              return <Text>No access to camera</Text>;
            } else {
              return (
                <View style={{ flex: 1 }}>
                  <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => {this.camera = ref;}}>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        width: '100%'
                      }}>
                      <TouchableOpacity
                        style={{
                          flex: 0.1,
                          alignSelf: 'flex-end',
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          this.setState({
                            type: this.state.type === Camera.Constants.Type.back
                              ? Camera.Constants.Type.front
                              : Camera.Constants.Type.back,
                          });
                        }}>
                        <Text
                          style={styles.textStyle}>
                          {' '}Flip{' '}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={styles.textStyle}>{' '}Snap{' '}</Text>
                      </TouchableOpacity>

                    </View>
                  </Camera>
                </View>
              
        );
    }
}
}

CameraScreen.propTypes = {};

const styles = StyleSheet.create({
    textStyle: {
       
        fontWeight: '600',
        fontSize: 18, marginBottom: 10, color: 'blue'
    },
    capture:{
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    }
});

export default CameraScreen;
