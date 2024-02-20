import * as React from 'react';
import { SignInScreen } from '~/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_KEYS } from '~/navigation';

const AuthStack = createNativeStackNavigator();
function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName={SCREEN_KEYS.SIGN_IN} screenOptions={{}}>
      <AuthStack.Screen name={SCREEN_KEYS.SIGN_IN} component={SignInScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
