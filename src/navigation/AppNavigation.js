import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from 'react-native';
import { RootNavigator } from './navigators';

const AppNavigation = props => {
  const navigationRef = useNavigationContainerRef();
  return (
    <View style={style.container}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
};

export default AppNavigation;

const style = StyleSheet.create({
  container: { flex: 1 },
});
