import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './apps/screen/Home';
import Login from './apps/screen/Login';
import ProductDetail, {
  Params as ProductDetailParams,
} from './apps/screen/ProductDetail';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: ProductDetailParams;
};

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: '#ffa000'},
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
