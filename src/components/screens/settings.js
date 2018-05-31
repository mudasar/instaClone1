import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import main from '../../styles/main';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={main.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('App')}>
                    <Text>Settings</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Settings.propTypes = {};

export default Settings;
