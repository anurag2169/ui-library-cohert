import React from 'react';

const variantClasses = {
  default: 'bg-gray-100 text-gray-800 border border-gray-300',
  success: 'bg-green-100 text-green-700 border border-green-300',
  warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
  danger: 'bg-red-100 text-red-700 border border-red-300',
  info: 'bg-blue-100 text-blue-700 border border-blue-300',
  outline: 'border border-gray-400 text-gray-800 bg-transparent',
};

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon = null,
  dashedBorder = false, // New prop to conditionally add dashed border
  isButton = false, // New prop to style badges like buttons
}) {
  // Add the dashed border class conditionally
  const dashedClass = dashedBorder ? 'border-dashed' : '';

  const base =
    `inline-flex items-center gap-1 rounded-full font-medium shadow-sm ` +
    variantClasses[variant] +
    ' ' +
    sizeClasses[size] +
    ' ' +
    dashedClass + // Applying the dashed border class here
    ' ' +
    (isButton ? 'cursor-pointer hover:bg-opacity-80 transition' : '') + // Additional styling if it's used as a button
    ' ' +
    className;

  return (
    <span className={base}>
      {icon && (
        <span className="flex h-4 w-4 items-center justify-center">{icon}</span>
      )}
      {children}
    </span>
  );
}
