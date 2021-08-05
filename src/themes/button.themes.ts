import { ButtonTheme, ButtonThemesMap } from '../models';

export const PRIMARY_COLOR = '#3e8ed0';
export const SECONDARY_COLOR = '#48c78e';
export const DANGER_COLOR = '#f14668';
export const WHITE_COLOR = '#ffffff';

export const getButtonThemeWith = (
  color: string,
  background: string
): ButtonTheme => ({
  color,
  background,
  border: `1px solid ${color}`,
  hover: {
    background: color,
    color: WHITE_COLOR,
  },
});

export const buttonThemesMap: ButtonThemesMap = {
  primary: getButtonThemeWith(PRIMARY_COLOR, WHITE_COLOR),
  secondary: getButtonThemeWith(SECONDARY_COLOR, WHITE_COLOR),
  danger: getButtonThemeWith(DANGER_COLOR, WHITE_COLOR),
};
