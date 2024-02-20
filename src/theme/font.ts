const type = {
  regular: 'AvenirNext-Regular',
  medium: 'AvenirNext-Medium',
  bold: 'AvenirNext-Bold',
  semiBold: 'AvenirNext-DemiBold',
};

const size = {
  xLarge: 18,
  large: 16,
  medium: 14,
  small: 12,
  xSmall: 10,
};

const lineHeight = {
  xLarge: 28,
  large: 22,
  medium: 17,
  small: 15,
  xSmall: 12,
};

export const typography = {
  // XL
  xLargeBold: {
    fontFamily: type.bold,
    fontSize: size.xLarge,
    lineHeight: lineHeight.xLarge,
  },
  xLargeSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.xLarge,
    lineHeight: lineHeight.xLarge,
  },
  xLargeMedium: {
    fontFamily: type.medium,
    fontSize: size.xLarge,
    lineHeight: lineHeight.xLarge,
  },
  // L
  largeRegular: {
    fontFamily: type.regular,
    fontSize: size.large,
    lineHeight: lineHeight.large,
  },
  largeSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.large,
    lineHeight: lineHeight.large,
  },
  largeMedium: {
    fontFamily: type.medium,
    fontSize: size.large,
    lineHeight: lineHeight.large,
  },
  // M
  mediumRegular: {
    fontFamily: type.regular,
    fontSize: size.medium,
    lineHeight: lineHeight.medium,
  },
  mediumSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.medium,
    lineHeight: lineHeight.medium,
  },
  mediumMedium: {
    fontFamily: type.medium,
    fontSize: size.medium,
    lineHeight: lineHeight.medium,
  },
  // S
  smallRegular: {
    fontFamily: type.regular,
    fontSize: size.small,
    lineHeight: lineHeight.small,
  },
  smallSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.small,
    lineHeight: lineHeight.small,
  },
  smallMedium: {
    fontFamily: type.medium,
    fontSize: size.small,
    lineHeight: lineHeight.small,
  },
  // XS
  xSmallRegular: {
    fontFamily: type.regular,
    fontSize: size.xSmall,
    lineHeight: lineHeight.xSmall,
  },
  xSmallSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.xSmall,
    lineHeight: lineHeight.xSmall,
  },
  xSmallMedium: {
    fontFamily: type.medium,
    fontSize: size.xSmall,
    lineHeight: lineHeight.xSmall,
  },
};

export type TypographyTypes = keyof typeof typography;

export const font = {
  ...type,
  lineHeight,
  size,
};
