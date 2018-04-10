import React from 'react';
import css from 'react-css-modules';
import styles from './button.css';

/**
 * Button represents a default button which accepts three props: text,
 * onClick and variant.
 *
 * Note that this Button needs styles applied through react-css-modules;
 * to use default styles declared here import the 'Button' component.
 */
const UnstyledButton = ({ text, onClick, variant }) => (
    <Button
      styleName={ styles[variant] }
      onClick={ onClick }>{ text }</Button>
);
// Note: 'styleName' is react-css-module's version of the 'className' prop

// Create a Button with the default styles applied
const Button = css(Button, styles);

export default Button;
// export UnstyledButton;