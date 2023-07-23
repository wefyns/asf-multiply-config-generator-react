import * as config from './config';

const white = Object.freeze({
  primary: config.white,
  secondary: config.whiteHover,
  tertiary: config.whiteAction,
});

const purple = Object.freeze({
  primary: config.purple,
  secondary: config.purpleAction,
  tertiary: config.purplePrimary,
});

const black = Object.freeze({
  primary: config.black,
  secondary: config.blackSecondary,
});

const grey = Object.freeze({
  primary: config.grey,
  secondary: config.greySecondary,
  tetriery: config.greyTetriery,
});

const blue = Object.freeze({
  primary: config.blue,
  secondary: config.blueSecondary,
  tertiary: config.blueTetriery,
});

const blueLight = Object.freeze({
  primary: config.blueLight,
});

const red = Object.freeze({
  primary: config.red,
  secondary: config.redSecondary,
  tetriery: config.redTetriery,
});

export const DARK_COLORS = Object.freeze({
  red,
  blue,
  grey,
  white,
  black,
  purple,
  blueLight,
});
