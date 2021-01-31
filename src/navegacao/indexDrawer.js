// In App.js in a new project

import * as React from 'react';
import {SafeAreaView, Platform, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import TelaD from '../views/TelaD';


const Drawer = createDrawerNavigator();

export default props => (
    <SafeAreaView style={{flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
         <NavigationContainer>
            <Drawer.Navigator initialRouteName="TelaD">
                <Drawer.Screen name="TelaA" component={TelaA} />
                <Drawer.Screen name="TelaB" component={TelaB} />
                <Drawer.Screen name="TelaC" component={TelaC} />
                <Drawer.Screen name="TelaD" component={TelaD} />
            </Drawer.Navigator>
        </NavigationContainer>
    </SafeAreaView>
)
