import React from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    appearance?: 'primary' | 'secondary' | 'subtle';
    size?: 'sm' | 'md';
    isFullWidth?: boolean;
    isDisabled?: boolean;
    href?: string;
    type?: 'button' | 'submit';
}
declare const _Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLAnchorElement>>;
export default _Button;
