const white = '#FFFFFF';

const primaryPalette = {
  primary: '#121212', // Main
  primaryLight1: '#3F3F3F',
  primaryLight2: '#616065',
  primaryLight3: 'rgba(33, 33, 33, 0.55)',
  //   primaryBackground: '#FFE6D6',
};

const secondaryPalette = {
  secondary: '#02323D', // Main
  // secondaryLight1: '#17505C',
  // secondaryBackground: '#EDF3F4',
};

const redPalette = {
  red: '#FF5757', // Main
};

const bluePalette = {
  // blue: '#1E88E5', // Main
  blueLight: '#46B8FF',
  // blueDark: '#005CB2',
};

const statusPalette = {
  danger: redPalette.red,
  // success: greenPalette.green,
  // warning: yellowPalette.yellow,
  // info: bluePalette.blue,
};
export type ColorStatus = keyof typeof statusPalette;

const gray = {
  100: '#C4CACC',
  200: '#C3D0DE',
  300: '#D3D3D3',
  400: '#D8D8D8',
  600: '#666666',
  800: '#1F2937',
  900: '#1C1C1E',
};

export const colors = {
  white,
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparent: 'rgba(0, 0, 0, 0)',
  backdrop: 'rgba(0, 0, 0, 0.4)',
  ...primaryPalette,
  ...secondaryPalette,
  gray,
  ...redPalette,
  ...bluePalette,
  text: white, // Default text color
  input: gray[400], // Input text color
  border: gray[200], // Default border color
  background: white, // Screen background color
  surface: gray[900], // surface Area color
  disabledText: gray[600], // Disabled button text color
  disabledBackground: gray[300], // Disabled button background color
  // Status colors
  ...statusPalette,
};

export type ColorsTypes = keyof typeof colors;
