export interface FontConfig {
  fontSize: number;
  lineHeight: number;
}

export interface FontsConfig {
  body?: FontConfig;
  small?: FontConfig;
  message?: FontConfig;
  ultraSmall?: FontConfig;
}

export const DefaultFontsConfig: FontsConfig = {
  body: { fontSize: 14, lineHeight: 24 },
  small: { fontSize: 14, lineHeight: 20 },
  message: { fontSize: 16, lineHeight: 22 },
  ultraSmall: { fontSize: 12, lineHeight: 16 },
};
