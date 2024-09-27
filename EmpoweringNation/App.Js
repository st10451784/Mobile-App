import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing all the screens
import HomePage from './screens/HomePage';
import FirstAidPage from './screens/FirstAidPage';
import CookingPage from './screens/CookingPage';
import SewingPage from './screens/SewingPage';
import LandscapingPage from './screens/LandscapingPage';
import GardenPage from './screens/GardenPage';
import ChildMindingPage from './screens/ChildMindingPage';
import LifeSkillsPage from './screens/LifeSkillsPage';
import BookingsPage from './screens/BookingsPage';
import ContactUsPage from './screens/ContactUsPage';
import DiscountPage from './screens/DiscountPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CAF50', // Green header
          },
          headerTintColor: '#fff', // White text in header
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Empowering Nation' }} />
        <Stack.Screen name="FirstAid" component={FirstAidPage} options={{ title: 'First Aid' }} />
        <Stack.Screen name="Cooking" component={CookingPage} options={{ title: 'Cooking' }} />
        <Stack.Screen name="Sewing" component={SewingPage} options={{ title: 'Sewing' }} />
        <Stack.Screen name="Landscaping" component={LandscapingPage} options={{ title: 'Landscaping' }} />
        <Stack.Screen name="Garden" component={GardenPage} options={{ title: 'Gardening' }} />
        <Stack.Screen name="ChildMinding" component={ChildMindingPage} options={{ title: 'Child Minding' }} />
        <Stack.Screen name="LifeSkills" component={LifeSkillsPage} options={{ title: 'Life Skills' }} />
        <Stack.Screen name="Bookings" component={BookingsPage} options={{ title: 'Bookings' }} />
        <Stack.Screen name="ContactUs" component={ContactUsPage} options={{ title: 'Contact Us' }} />
        <Stack.Screen name="Discounts" component={DiscountPage} options={{ title: 'Discounts' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
