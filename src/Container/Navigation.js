import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DashboardContainer from "./DashboardContainer";
import ViewContainer from "./ViewContainer";

const TabNavigator = createBottomTabNavigator(
    {
        DashboardScreen: {
            screen: DashboardContainer,
            // navigationOptions: {
            //     header: null
            // }
        },
        ViewScreen: {
            screen: ViewContainer,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        initialRouteName : 'DashboardScreen'
    }

);

export default createAppContainer(TabNavigator);