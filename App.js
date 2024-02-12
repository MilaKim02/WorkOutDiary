import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WorkoutContext } from './components/Contexts';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WorkOutList from './components/WorkOutList';
import AddWorkOut from './components/AddWorkOut';
import Settings from './components/Settings';
import Styles from './styles/Styles';


export default function App() {

  
  const [workout, setWorkout] = useState([]);

  return (
    <WorkoutContext.Provider value={{ workout, setWorkout }}>
      
        <PaperProvider theme={MD3LightTheme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
    
    </WorkoutContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom' style={Styles.container}>
        <Tab.Screen
          name='AddWorkOut'
          options={{ title: 'WorkOut', tabBarIcon: ()=> <Icon source= 'cards-heart-outline' size={24}></Icon>}}
          component={AddWorkOut}></Tab.Screen>
        <Tab.Screen
          name='WorkOutList'
          options={{ title: 'WorkOutList',tabBarIcon: ()=> <Icon source= 'clipboard-list-outline' size={24}></Icon> }}
          component={WorkOutList}></Tab.Screen>
        <Tab.Screen
          name='set'
          options={{ title: 'Settings', tabBarIcon: ()=> <Icon source= 'cog-outline' size={24}></Icon> }}
          component={Settings}></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  )
}


