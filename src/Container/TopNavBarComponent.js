import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class TopNavBarComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.TopNavBarComponent}>
                {/*<View style={styles.rounded}>*/}
                {/*</View>*/}
                <TouchableOpacity
                    onPress={() => {this.props.callback()}}
                    title="user"
                    style={styles.btn}>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TopNavBarComponent: {
        flex: 1,
        backgroundColor: '#2B2E4A',
        elevation: 3,
    },
    rounded: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#fff',
        margin: 6,
    },
    btn: {

    }
})