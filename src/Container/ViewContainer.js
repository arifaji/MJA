import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import TopNavBarComponent from './TopNavBarComponent'

import FormComponent from "./FormComponent";
import ResultComponent from "./ResultComponent";

export default class ViewContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: 'Jupe',
                gender: 'Male'
            },
            hasil: {
                username: '',
                gender: ''
            }
        }
    }

    render() {
        return (
            <View style={styles.DashboardContainer}>
                <TopNavBarComponent/>
                <FormComponent
                    usr={this.state.user}
                    handleUsername={this.handleUsername.bind(this)}
                    handleGender={this.handleGender.bind(this)}
                />
                <ResultComponent usr={this.state.user}
                save={this.save.bind()}/>
            </View>
        )
    }

    handleUsername(txt) {
        const that = {
            username: txt,
            gender: this.state.user.gender
        }
        this.setState({user: that})
    }

    handleGender(txt) {
        const that = {
            username: this.state.user.username,
            gender: txt
        }
        this.setState({user: that})
    }

    save(){
        const that = {
            username: this.state.user.username,
            gender: this.state.user.gender
        }
        this.setState({user: that})
    }
}

const styles = StyleSheet.create({
    DashboardContainer: {
        flex: 1,
        backgroundColor: '#903749',
        flexDirection: 'column'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})