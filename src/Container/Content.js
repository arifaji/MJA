import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {getCustomer} from "./Service";

class Content extends React.Component{

    constructor(props){
        super(props);
        this.state = {
                names: []
        }
    }

    render() {
        return(
            <View style={styles.Content}>
                <Button title='Get' onPress={ () => {this.fetchCustomer()}} />
                <ScrollView>
                    {
                        this.state.names.map((name, index) => (
                            <View key = {name.customernumber} style = {styles.item}>
                                <Text>{name.firstname} {name.lastname}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }


    async fetchCustomer(){
        const response = await getCustomer();
        this.setState({names : response.data.values})
    }
}

export default Content

const styles = StyleSheet.create({
    Content: {
        flex: 9,
        backgroundColor: '#EFF0F6',
        flexDirection: 'row'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#B6E1F2'
    }
})