import {Text, View} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';

import CardDetails from './cardDetails';
// const axios = require('axios');
class CardList extends Component  {
    state = {list: []};

    componentDidMount() {
        console.log('dsvsdv');
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(res => { this.setState({ list: res.data }) });
    };

    renderAlbums() {
        return this.state.list.map(album => <CardDetails key={album.title} album={album}/>);
    };

    render() {
        console.log(this.state);
        const styles = {
            viewStyle: {
                backroundColor: '#F8F8F8',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                paddingTop: 15,
                shadowColor: '#000',
                shadowOffSet: {width: 0, height: 2},
                shadowOpacity: 0.2
            },
            textStyle: {
                fontSize: 20
            }, 
            buttonStyle : {
                flex: 1, 
            }
        };
    
        const { textStyle, viewStyle } = styles;

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
};

export default CardList;