import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Produtos' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Detalhes do Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
