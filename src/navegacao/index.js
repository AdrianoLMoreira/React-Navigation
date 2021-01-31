// In App.js in a new project

import * as React from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import TelaD from '../views/TelaD';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

export default props => (
    <SafeAreaView style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }}>
        <NavigationContainer>
            <Tab.Navigator initialRouteName="TelaA"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case "TelaA":
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline';
                                break;
                            case "TelaB":
                                iconName = focused ? 'ios-information-circle' : 'apps-outline';
                                break;
                            case "TelaC":
                                iconName = focused ? 'beer-outline' : 'ios-list';
                                break;
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    showLabel: true
                }}
            >
                <Tab.Screen name="TelaA" component={TelaA} />
                <Tab.Screen name="TelaB" component={TelaB} />
                <Tab.Screen name="TelaC" component={TelaC} />
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaView>
)
