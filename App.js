
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from './screens/HomeScreens';
import RestaurantScreens from './screens/RestaurantScreens';
import CounterScreens from './screens/CounterScreens';

import { enableScreens } from 'react-native-screens';
import { store } from './redux/store'
import {Provider} from 'react-redux'

enableScreens();

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Provider store ={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreens}
            options={{  
            headerShown: false
          }} 
        />
        <Stack.Screen name="RestaurantScreens" component={RestaurantScreens}
            options={{  
            headerShown: false
          }} 
        />

        <Stack.Screen name="CounterScreens" component={CounterScreens}
          options={{  
            headerShown: false,
            presentation:"transparentModal"
            
          }} 
        />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>    
  )
}

export default App