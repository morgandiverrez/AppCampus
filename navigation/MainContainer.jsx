import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  {ThemeProvider}  from './utils/context';


// Screens
import BusScreen from './screens/Campus/ActuScreen';
import CrousScreen from './screens/CrousScreen';
import PlanningScreen from './screens/PlanningScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const busName = "AppCampus";
const crousName = "CROUS";
const planningName = "Planning";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
 // const { theme } = useTheme()
  return (
    <React.StrictMode>
      <ThemeProvider>
        <NavigationContainer >
          <Tab.Navigator
            initialRouteName={planningName}
            screenOptions={({ route }) => ({
            
              "tabBarActiveTintColor":"#f0ad42",
              "tabBarInactiveTintColor":"grey",
              "tabBarLabelStyle":{
                "paddingBottom":10,
                "fontSize":10
              },
              "tabBarStyle":[
                {
                  "display":"flex"
                },
                null
              ]
            ,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                if (rn === planningName) {
                  iconName = focused ? 'calendar-sharp' : 'calendar-sharp';

                } else if (rn === busName) {
                  iconName = focused ? 'bus' : 'bus-outline';

                } else if (rn === crousName) {
                  iconName = focused ? 'fast-food' : 'fast-food-outline';
                }else if (rn === settingsName) {
                  iconName = focused ? 'settings' : 'settings-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            >
            <Tab.Screen name={planningName} component={PlanningScreen} />
            <Tab.Screen  name={busName} component={BusScreen} />
            <Tab.Screen name={crousName} component={CrousScreen} />
            <Tab.Screen name={settingsName} component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MainContainer;