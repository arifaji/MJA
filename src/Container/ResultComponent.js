import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default class ResultComponent extends React.Component{

    constructor(props){
        super(props);

    }

    render() {
        return(
            <View style={styles.Result}>
                <Text style={styles.Text}>{this.props.usr.username} is {this.props.usr.gender}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Result: {
        flex: 2,
        backgroundColor: '#903749',
        flexDirection: 'column',
        margin: 30
    },
    Text:{
        marginTop: 20,
        color: '#fff'
    }
})