import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DistanceContext, DurationContext } from './components/Contexts';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WorkOutList from './components/WorkOutList';
import AddWorkOut from './components/AddWorkOut';
import Settings from './components/Settings';
import Styles from './styles/Styles';


export default function App() {

  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState([]);

  return (
    <DistanceContext.Provider value={{distance, setDistance}}>
      <DurationContext.Provider value={{duration, setDuration}}>
        <PaperProvider theme={MD3LightTheme}>
          <SafeAreaProvider>
            <Navigation/>
          </SafeAreaProvider>
        </PaperProvider>
      </DurationContext.Provider>
    </DistanceContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom' style={Styles.container}>
        <Tab.Screen name='AddWorkOut' options={{ title: 'WorkOut' }} component={AddWorkOut}></Tab.Screen>
        <Tab.Screen name='WorkOutList' options={{ title: 'WorkOutList' }} component={WorkOutList}></Tab.Screen>
        <Tab.Screen name='set' options={{ title: 'Settings' }} component={Settings}></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  )
}

