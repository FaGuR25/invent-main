import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Product} from './model/Products';
import {Text, View, StyleSheet} from 'react-native';
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
        <View style={styles.page}>
          <Text style={styles.header}>{product.nombre}</Text>
          <View style={styles.row}>
            <Text style={styles.col}> Existencias:</Text>
            <Text style={styles.colAuto}>
              {product.currentStock} / {product.maxStock}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.col}>precio</Text>
            <Text style={styles.colAuto}> {product.precio}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: 'black',
  },
  precio: {
    fontSize: 40,
    color: 'black',
  },
  existencia: {
    fontSize: 25,
    color: 'black',
  },
  row: {
    display: 'flex',
  },
  col: {
    flexGrow: 999,
  },
  colAuto: {},
  page:{
    
  }
});
export default ProductsDetail;
