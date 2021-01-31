// In App.js in a new project

import * as React from 'react';
import {SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator();

export default props => (
    <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaA"
        screenOptions={{headerShown: true}}>
        <Stack.Screen name="TelaA"
            options={{title: 'Tela inicial'}}>
                {props => (
                    <PassoStack {...props} avancar="TelaB">
                        <TelaA />
                    </PassoStack>
                )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
                {props => (
                    <PassoStack {...props} voltar avancar="TelaC">
                        <TelaB />
                    </PassoStack>
                )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
                {props => (
                    <PassoStack {...props} voltar avancar="TelaC">
                        <TelaC {...props} />
                    </PassoStack>
                )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
)
