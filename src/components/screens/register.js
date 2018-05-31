import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';

import main from '../../styles/main';
import config from '../../config';

export class Register extends Component {

    static navigationOptions = {
        title: 'Register'
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onRegister = this.onRegister.bind(this);
        this.userNameChanged = this.userNameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
    }

    userNameChanged(username){
        this.setState({username: username});
    }

    passwordChanged(password){
        this.setState({password: password});
    }

   async onRegister(){
        try {
            const response = await fetch(`${config.baseUrl}/signup`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.username,
                    password: this.state.password,
                })
                
                });
                let responseJson = await response.json();
                console.log(responseJson);
                if(responseJson.confirmation === 'success'){
                    this.props.navigation.navigate('App');
                }else{
                    alert(responseJson.message);
                }
                
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={[main.container, { justifyContent: 'flex-start', marginTop:25 }]}>
                <Text>Please register using a username and password.</Text>
                <TextInput value={this.state.username} placeholder="Username" keyboardType="email-address" autoFocus={true} autoCorrect={false} onChangeText={this.userNameChanged} style={styles.inputStyle} />
                <TextInput value={this.state.password} placeholder="password" secureTextEntry onChangeText={this.passwordChanged} style={styles.inputStyle} />
                <Button title="Signup" onPress={this.onRegister} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        //borderColor: 'gray',
       // borderBottomWidth: StyleSheet.hairlineWidth,
       // borderBottomColor: 'gray',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10,
        
    }
});

export default Register;
