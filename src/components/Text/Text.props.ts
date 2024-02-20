import { InterpolationMap, TOptionsBase } from 'i18next';
import { TextProps as TextProperties, GestureResponderEvent, ViewProps } from 'react-native';
import { SpacingTypes, TypographyTypes } from '~/theme';

export interface TextProps extends TextProperties {
  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * Text which is looked up via i18n.
   */
  tx?: string;

  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TOptionsBase & InterpolationMap<string>;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  containerStyle?: ViewProps['style'];

  /**
   * One of the different types of text typography.
   */
  variant?: TypographyTypes;

  color?: string;

  touchable?: boolean;
  center?: boolean;

  top?: SpacingTypes;
  bottom?: SpacingTypes;
  left?: SpacingTypes;
  right?: SpacingTypes;

  /**
   * This will put line under the text.
   */
  underline?: boolean;

  onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined;
}
