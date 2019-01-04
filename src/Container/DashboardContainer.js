import React from 'react';
import { StyleSheet, View } from 'react-native';

import TopNavBarComponent from './TopNavBarComponent'
import Content from "./Content";

export default class DashboardContainer extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            user: {
                username: "Jupri"
            },
            wallet: {
                balance: 1000000,
                currency: "IDR"
            }
        }
    }

    render() {
        return(
            <View style={styles.DashboardContainer}>
                <TopNavBarComponent callback={this.callbackNavigate} />
                <Content/>
            </View>
        )
    }

    callbackNavigate = () =>{
        this.props.navigation.navigate('ViewScreen');
    }


}



const styles = StyleSheet.create({
    DashboardContainer: {
        flex: 1,
        backgroundColor: '#396EAA',
        flexDirection: 'column'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})