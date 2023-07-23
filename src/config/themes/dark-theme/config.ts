//  white
export const white: string = '#F9F9F9';
export const whiteHover: string = '#EEEBEB';
export const whiteAction: string = '#F0F0F0';

export const purple: string = '#531DB4';
export const purplePrimary: string = '#531DAA';
export const purpleAction: string = '#535DB4';

export const black: string = '#18191C';
export const blackSecondary: string = '#232627';
export const blackTetriery: string = '#111';

export const blue: string = '#5865f2';
export const blueSecondary: string = '#4752c4';
export const blueTetriery: string = '#3c45a5';

export const grey: string = '#36393F';
export const greySecondary: string = '#B9BBBE';
export const greyTetriery: string = '#828589';

export const blueLight: string = '#00AEF3';

export const red: string = '#DD5353';
export const redSecondary: string = '#B73E3E';
export const redTetriery: string = 'D2001A';

export const blackShadow: string = 'rgba(0, 0, 0, 0.3)';

export const DARK_CONFIG = Object.freeze({
  background: blackSecondary,

  shadow: {
    primary: blackShadow,
  },

  checkbox: Object.freeze({
    primary: blue,
    tetriery: blueTetriery,
    secondary: blueSecondary,
  }),

  text: Object.freeze({
    primary: white,
    tetriery: greyTetriery,
    secondary: blackSecondary,
  }),

  button: Object.freeze({
    text: white,
    primary: blue,
    tetriery: greyTetriery,
    secondary: blueSecondary,
  }),

  input: Object.freeze({
    bg: blackTetriery,
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
    wrapper: blackSecondary,
    disabled: black,
    border: {
      all: `1px solid ${black}`,
    },
    bg: {
      active: black,
      default: white,
      disabled: white,
    },
  }),
});
