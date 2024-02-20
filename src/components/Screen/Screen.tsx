// @ts-nocheck
import * as React from 'react';
import { KeyboardAvoidingView, ScrollView, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, isIOS, spacing } from '~/theme';
import { ScreenProps } from './Screen.props';

const ScrollContainer = React.forwardRef((props, ref) => {
  return (
    <ScrollView
      ref={ref}
      style={[{ flex: 1 }, props.style]}
      showsVerticalScrollIndicator={false}
      bounces={false}
      keyboardShouldPersistTaps={'handled'}
      contentContainerStyle={{ flexGrow: 1 }}>
      {props.children}
    </ScrollView>
  );
});

function ScreenComponent(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const {
    topSafe,
    bottomSafe,
    scrollRef,
    horizontal = null,
    top = 'none',
    bottom = 'none',
    color = 'background',
    scrollable,
    style,
  } = props;

  const paddingTop = topSafe ? Math.max(insets.top, spacing.normal) : spacing[top];
  const paddingBottom = bottomSafe ? Math.max(insets.bottom, spacing.normal) : spacing[bottom];

  const customStyle = {
    paddingTop,
    paddingBottom,
    backgroundColor: colors[color],
    paddingHorizontal: spacing[horizontal],
  };

  // const keyboardOffset = headerHeight + spacing.medium - paddingBottom;
  const keyboardOffset = 0;

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={keyboardOffset}
      style={{ flex: 1 }}
      behavior={isIOS ? 'padding' : undefined}>
      {scrollable && (
        <ScrollContainer ref={scrollRef} style={{ backgroundColor: colors[color] }}>
          <View style={[styles.container, customStyle, style]}>{props.children}</View>
        </ScrollContainer>
      )}
      {!scrollable && <View style={[styles.container, customStyle, style]}>{props.children}</View>}
    </KeyboardAvoidingView>
  );
}

export default function Screen({ ...props }: ScreenProps) {
  return <ScreenComponent {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: spacing.content,
  },
});
