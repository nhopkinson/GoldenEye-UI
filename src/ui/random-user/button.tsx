import * as React from 'react';

interface ButtonProps {
  btnLabel: string;
  handleClick(): void;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { btnLabel, handleClick } = props;

  return <button onClick={handleClick}>{btnLabel}</button>;
};
