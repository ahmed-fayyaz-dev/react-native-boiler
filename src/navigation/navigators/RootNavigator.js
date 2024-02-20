import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import React, { useEffect, useState } from 'react';

const RootStack = createNativeStackNavigator();
function RootStackScreen(props) {
  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    setAuthChecked(true);
  }, []);

  if (!authChecked) {
    return null;
  }
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
      <RootStack.Screen name={'Auth'} component={AuthNavigator} />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
