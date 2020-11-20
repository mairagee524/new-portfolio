import React from 'react';
import './style.css';

const STYLES = [
    'btn-primary',
    'btn-outline'
]

const SIZES = [
    'btn-md',
    'btn-lg'
]

export const Button = ({
    children,
    type, 
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </Button> 
    )
}