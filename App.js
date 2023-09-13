import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator} from '@react-navigation/drawer'
import { Ionicons} from '@expo/vector-icons'


import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#b8b5b5'},
      headerTintColor:'white',
      sceneContainerStyle:{ backgroundColor: '#111111' },
      drawerContentStyle:{
        backgroundColor: '#111111',
      },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor : '#dbd9d9'
    }} >
      <Drawer.Screen name="Categories" component={CategoriesScreen} 
        options={{
          title:'All Categories',
          drawerIcon: ((color,size)=> <Ionicons name='list' color={color} size={size}/>)}} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}
         options={{
          drawerIcon: ((color,size)=> <Ionicons name='star' color={color} size={size}/>)}}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#b8b5b5'},
          headerTintColor:'white',
          contentStyle:{ backgroundColor: '#111111' }
        }}>
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator} 
            options={{
              headerShown:false
            }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{title:'About the Meal'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
