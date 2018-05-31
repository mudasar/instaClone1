import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Post } from '../presentation';

export default class PostFeed extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
        
        };

        this.renderPost = this.renderPost.bind(this);

    }

    renderPost(){
        return (<Post />);
    }

    render(){
        return (<FlatList 
            data={[1,2,3,4,5,6,7,8,9,10]}
            renderItem={this.renderPost}
            keyExtractor={ (item, index) => index.toString() }  />);
    }
}