import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';

import main from '../../styles/main';
import config from '../../config';

export class Login extends Component {

    static navigationOptions = {
        title: 'Login'
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onLogin = this.onLogin.bind(this);
        this.userNameChanged = this.userNameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
    }

    userNameChanged(username){
        this.setState({username: username});
    }

    passwordChanged(password){
        this.setState({password: password});
    }

   async onLogin(){
        try {
            console.log(`${config.baseUrl}/login`);
            const response = await fetch(`${config.baseUrl}/login`, {
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
                if(responseJson.confirmation === 'fail'){
                    alert(responseJson.message);
                    return;
                }

                console.log(responseJson);
                this.props.navigation.navigate('App',{ user: responseJson });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={[main.container, { justifyContent: 'flex-start', marginTop:25 }]}>

                <Text>Please login using your username and password.</Text>
                <TextInput value={this.state.username} placeholder="Username" keyboardType="email-address" autoFocus={true} autoCorrect={false} onChangeText={this.userNameChanged} style={styles.inputStyle} />
                <TextInput value={this.state.password} placeholder="password" secureTextEntry onChangeText={this.passwordChanged} style={styles.inputStyle} />
                <Button title="Login" onPress={this.onLogin} />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text>New User?</Text>
                </TouchableOpacity>
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

export default Login;
