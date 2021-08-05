import React from 'react';
import styled from 'styled-components';

import { buttonThemesMap } from '../../themes/button.themes';
import { ButtonProps, ButtonTheme } from '../../models';

const DefaultButton = styled.button`
  font-size: 1rem;
  padding: 0.5em 1em;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
`;

const StyledButton = styled(DefaultButton)(
  (props: ButtonTheme) => `
    border: ${props.border};
    color: ${props.color};
    background: ${props.background};
    &:hover:enabled {
      color: ${props.hover.color};
      background: ${props.hover.background};
    }
    opacity: ${props.disabled ? 0.4 : 1};
    cursor: ${props.disabled ? 'not-allowed' : 'auto'};
  `
);

export const Button: React.FC<ButtonProps> = (props) => {
  const { type, action, text, disabled, ...rest } = props;

  const handleClick = () => {
    if (typeof action === 'function') {
      action();
    }
    return;
  };

  return (
    <StyledButton
      onClick={handleClick}
      disabled={disabled}
      {...buttonThemesMap[type!]}
      {...rest}
    >
      {text}
    </StyledButton>
  );
};

const defaultProps: Partial<ButtonProps> = {
  type: 'primary',
};

Button.defaultProps = defaultProps;
