//  white
export const white: string = '#ffffff';
export const whiteHover: string = '#F5F5F5';
export const whiteAction: string = '#EBEBEB';

export const purple: string = '#531DB4';
export const purplePrimary: string = '#531DAA';
export const purpleAction: string = '#535DB4';

export const black: string = '#232627';
export const blackSecondary: string = '#5C5C5C';

export const grey: string = '#36393F';
export const greySecondary: string = '#B9BBBE';
export const greyTetriery: string = '#828589';

export const blue: string = '#5865f2';
export const blueSecondary: string = '#4752c4';
export const blueTetriery: string = '#3c45a5';

export const blueLight: string = '#00AEF3';

export const red: string = '#DD5353';
export const redSecondary: string = '#B73E3E';
export const redTetriery: string = 'D2001A';

export const LIGHT_CONFIG = Object.freeze({
  background: white,

  shadow: {
    primary: white,
  },

  checkbox: Object.freeze({
    primary: blue,
    tetriery: blueTetriery,
    secondary: blueSecondary,
  }),

  text: Object.freeze({
    primary: black,
    tetriery: greyTetriery,
    secondary: blackSecondary,
  }),

  button: Object.freeze({
    text: white,
    primary: blue,
    tetriery: blueTetriery,
    secondary: blueSecondary,
  }),

  input: Object.freeze({
    bg: whiteHover,
    light: Object.freeze({
      error: red,
      text: black,
      background: whiteHover,
    }),
    dark: Object.freeze({
      error: red,
      text: greySecondary,
      background: blackSecondary,
    }),
  }),

  toggle: Object.freeze({
    menu: black,
    icon: white,
    wrapper: black,
    disabled: black,
    border: {
      all: `1px solid ${black}`,
    },
    bg: {
      active: black,
      default: white,
      disabled: black,
    },
  }),
});
