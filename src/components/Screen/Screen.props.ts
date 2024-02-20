import { LegacyRef } from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { ColorsTypes, SpacingTypes } from '~/theme';
export interface ScreenProps {
  children?: React.ReactNode;
  style?: ViewStyle;

  /*
   * Screen background color
   * Default value if it's a safe screen 'white' otherwise 'background'
   */
  color?: ColorsTypes;

  scrollable?: boolean; // Wrap content inside ScrollView? Defaults to false.
  scrollRef?: LegacyRef<ScrollView>; // ScrollView ref

  topSafe?: boolean; // Wrap content inside SafeAreaView? Defaults to false.
  bottomSafe?: boolean; // Wrap content inside SafeAreaView? Defaults to false.
  horizontal?: SpacingTypes; // Horizontal Padding: Default 'content'
  top?: SpacingTypes; // Padding top
  bottom?: SpacingTypes; // Padding bottom

  keyboardOffset?: number;
}
