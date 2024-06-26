import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './apps/screen/Home';
import Login from './apps/screen/Login';
import ProductDetails, {
  Params as ProductDetailsParams,
} from './apps/screen/ProductDetail';
import ProducAdd from './apps/screen/ProductAdd';
import {Button} from 'react-native';
const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  ProdutDetails: ProductDetailsParams;
  ProductAdd: undefined;
};

function HomeHeader(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Button title="Agregar" onPress={() => navigation.navigate('ProductAdd')} />
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: HomeHeader,
          }}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ProductAdd" component={ProducAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
