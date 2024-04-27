import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Product} from './model/Products';
import {Text} from 'react-native';

export type Props = {
  product: Product;
};

function ProductsDetail({product}: Props): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>{product.nombre}</Text>
      <Text>{product.currentStock}</Text>
      <Text>{product.precio}</Text>
    </SafeAreaView>
  );
}
export default ProductsDetail;
