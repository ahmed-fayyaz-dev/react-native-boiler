import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Images } from '~/assets/images';
import { Screen } from '~/components';

const SignIn = () => {
  return (
    <Screen>
      <Image source={Images.splash} style={styles.photo} resizeMode="cover" />
    </Screen>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  photo: {
    aspectRatio: 1,
    height: '100%',
  },
});
