import React from 'react';
import {cn} from '../../lib/cn.js';

const variantClasses = {
  text: 'bg-transparent hover:bg-opacity-10',
  outline: 'border bg-transparent hover:bg-opacity-10',
  flat: 'bg-opacity-10',
  solid: '',
};

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
  xl: 'px-6 py-3 text-xl',
};

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  pill: 'rounded-full',
};

const colorClasses = {
  primary: {
    base: 'text-primaryForeground bg-primary border-primary',
    outline: 'text-primary border-primary',
    text: 'text-primary',
    flat: 'text-primary bg-primaryLight',
  },
  secondary: {
    base: 'text-secondaryForeground bg-secondary border-secondary',
    outline: 'text-secondary border-secondary',
    text: 'text-secondary',
    flat: 'text-secondary bg-secondaryLight',
  },
  muted: {
    base: 'text-mutedForeground bg-muted border-muted',
    outline: 'text-muted border-muted',
    text: 'text-muted',
    flat: 'text-muted bg-mutedLight',
  },
  destructive: {
    base: 'text-destructiveForeground bg-destructive border-destructive',
    outline: 'text-destructive border-destructive',
    text: 'text-destructive',
    flat: 'text-destructive bg-destructiveLight',
  },
  success: {
    base: 'text-successForeground bg-success border-success',
    outline: 'text-success border-success',
    text: 'text-success',
    flat: 'text-success bg-successLight',
  },
};

export function Button({
  children,
  variant = 'solid',
  size = 'md',
  rounded = 'md',
  color = 'primary',
  disabled = false,
  className = '',
  ...props
}) {
  const colorStyle =
    variant === 'solid'
      ? colorClasses[color].base
      : colorClasses[color][variant];

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition duration-150 ease-in-out focus:scale-105 active:scale-95',
        variantClasses[variant],
        sizeClasses[size],
        roundedClasses[rounded],
        colorStyle,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
