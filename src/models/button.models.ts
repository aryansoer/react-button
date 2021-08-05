export type ButtonType = 'primary' | 'secondary' | 'danger';

export type ButtonAction = () => void;

export interface ButtonProps {
  text: string;
  type?: ButtonType;
  action?: ButtonAction;
  disabled?: boolean;
}

export interface ButtonTheme {
  color: string;
  border: string;
  background: string;
  hover: Partial<ButtonTheme>;
  disabled?: boolean;
}

export type ButtonThemesMap = {
  [key in ButtonType]: ButtonTheme;
};
