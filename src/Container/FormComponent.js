import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default class FormComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={styles.Form}>
                <View style={styles.Rounded}/>
                <Text style={styles.Text}>Username</Text>
                <TextInput
                    style={styles.FormInput}
                    value={this.props.usr.username}
                    onChangeText={(txt) => {this.props.handleUsername(txt)}}
                />
                <Text style={styles.Text}>Gender</Text>
                <TextInput
                    style={styles.FormInput}
                    value={this.props.usr.gender}
                    onChangeText={(txt) => {this.props.handleGender(txt)}}
                />
                <Button
                    onPress={() => this.props.save()}
                    title="Add"
                    color="#E84545"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Form: {
        flex: 5,
        backgroundColor: '#903749',
        flexDirection: 'column',
        margin: 30
    },
    Rounded: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#fff',
        marginHorizontal: 110
    },
    FormInput: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        marginBottom: 10,
        color: '#fff'
    },
    Text:{
        color:'#fff'
    }
})