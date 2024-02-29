import { useState } from 'react';
import { WorkoutContext, UnitsContext } from './components/Contexts';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon,PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WorkOutList from './components/WorkOutList';
import AddWorkOut from './components/AddWorkOut';
import Settings from './components/Settings';
import Styles, { MyTheme } from './styles/Styles';
import { useFonts } from 'expo-font';


export default function App() {

  const [loaded] = useFonts({
    Comfortaa: require('./fonts/Comfortaa-Light.ttf')
  });

  const [workout, setWorkout] = useState([]);
  const [units, setUnits] = useState('km');

  console.log(workout, units);
  return (
    <WorkoutContext.Provider value={{ workout, setWorkout }}>
      <UnitsContext.Provider value={{ units, setUnits }}>
        <PaperProvider theme={MyTheme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </UnitsContext.Provider>
    </WorkoutContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom'
        style={Styles.container}
        screenOptions={{
          tabBarActiveTintColor: MyTheme.colors.primary,
          tabBarInactiveTintColor: 'black',
          tabBarStyle: { backgroundColor: MyTheme.colors.surfaceVariant }
        }}>
        <Tab.Screen
          name='AddWorkOut'
          options={{
            title: 'WorkOut', tabBarIcon: ({ color }) => <Icon color={color}
              source='cards-heart-outline'
              size={24}></Icon>
          }}
          component={AddWorkOut}>
        </Tab.Screen>
        <Tab.Screen
          name='WorkOutList'
          options={{
            title: 'WorkOutList', tabBarIcon: ({ color }) => <Icon color={color}
              source='clipboard-list-outline'
              size={24}></Icon>
          }}
          component={WorkOutList}>
        </Tab.Screen>
        <Tab.Screen
          name='set'
          options={{
            title: 'Settings', tabBarIcon: ({ color }) => <Icon color={color}
              source='cog-outline'
              size={24}></Icon>
          }}
          component={Settings}>
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}


