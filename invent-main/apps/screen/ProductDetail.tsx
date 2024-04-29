import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Product} from './model/Products';
import {Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

export type Params = {
  product: Product;
};

export type Props = {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
  navigation: StackNavigationProp<RootStackParamList, 'ProductDetails'>;
};

function ProductsDetail({route}: Props): React.JSX.Element {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(route.params.product);
  }, [route]);
  return (
    <SafeAreaView>
      {product && (
        <View>
          <Text>{product.nombre}</Text>
          <Text>{product.currentStock}</Text>
          <Text>{product.precio}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
export default ProductsDetail;
